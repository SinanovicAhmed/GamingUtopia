import { IGames } from "@/app/interfaces/Games";
import GameCard from "./GameCard";
import ButtonScrollWrapper from "../helperComponents/ButtonScrollWrapper";

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
  const res = await fetch(url);
  const data: IGames = await res.json();
  return data;
};

const CardContainer = async ({ options, title }: { options: IOptions; title: string }) => {
  const games = await getGames(options);

  return (
    <div className="w-full flex flex-col px-5 pb-10">
      <span className="w-full p-1 flex justify-between">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <button className="bg-transparent text-white text-sm hover:brightness-75">View all</button>
      </span>
      <ButtonScrollWrapper>
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ButtonScrollWrapper>
    </div>
  );
};

export default CardContainer;
