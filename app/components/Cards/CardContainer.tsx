import { IGames } from "@/app/interfaces/Games";
import GameCard from "./GameCard";
import ButtonScrollWrapper from "../helperComponents/ButtonScrollWrapper";
import { Session, getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { IFavouriteGames } from "@/app/interfaces/Favourites";

interface IOptions {
  parent_platforms?: number;
  stores?: number | string;
  genres?: string;
  ordering?: string;
}

const getGames = async (options: IOptions) => {
  let url = `https://api.rawg.io/api/games?key=${process.env.RAWR_API_KEY}&page_size=10`;

  if (options.parent_platforms) {
    url += `&parent_platforms=${options.parent_platforms}`;
  }
  if (options.stores) {
    url += `&stores=${options.stores}`;
  }
  if (options.genres) {
    url += `&genres=${options.genres}`;
  }
  if (options.ordering) {
    url += `&ordering=${options.ordering}`;
  }
  try {
    const res = await fetch(url);
    const data: IGames = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getFavourites = async (email: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/favourites/" + email, {
      next: { tags: ["favourites"] },
    });
    const { data }: { data: IFavouriteGames[] } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const CardContainer = async ({ options, title }: { options: IOptions; title: string }) => {
  const session = (await getServerSession(handler)) as Session;
  const games = await getGames(options!);
  const favourites = session?.user ? await getFavourites(session.user.email!) : [];

  const favouriteGameID = (gameId: number) => {
    const favoriteId = favourites?.find((favorite) => favorite.game_id === gameId)?._id;
    return favoriteId;
  };

  return (
    <div className="w-full flex flex-col px-5 pb-10">
      <span className="w-full p-1 flex justify-between">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <button className="bg-transparent text-white text-sm hover:brightness-75">View all</button>
      </span>
      <ButtonScrollWrapper>
        {games?.results.map((game) => (
          <GameCard key={game.id} favouriteID={favourites ? favouriteGameID(game.id) : null} game={game} />
        ))}
      </ButtonScrollWrapper>
    </div>
  );
};

export default CardContainer;
