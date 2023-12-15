import { IGamesSearch } from "@/app/interfaces/Games";
import { Session, getServerSession } from "next-auth";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { IFavouriteGames } from "@/app/interfaces/Favourites";
import React from "react";
import GameCard from "./GameCard";
import PaginationNav from "./PaginationNav";

const getGames = async (page: number, param: string) => {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWR_API_KEY}&page=${page}&search=${param}`
    );
    const data: IGamesSearch = await res.json();
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

const SearchedGamesContainer = async ({ page, param }: { page: number; param: string }) => {
  const games = await getGames(page, param);
  const session = (await getServerSession(handler)) as Session;
  const favourites = session?.user ? await getFavourites(session.user.email!) : [];

  const favouriteGameID = (gameId: number) => {
    const favoriteId = favourites?.find((favorite) => favorite.game_id === gameId)?._id;
    return favoriteId;
  };

  return (
    <div className="py-4 w-full flex justify-evenly gap-4 flex-wrap bg-primary-color">
      {games?.results.map((game) => (
        <GameCard key={game.id} favouriteID={favourites ? favouriteGameID(game.id) : null} game={game} />
      ))}
      <PaginationNav
        next={games?.next ? true : false}
        prev={games?.previous ? true : false}
        page={page}
        param={param}
      />
    </div>
  );
};

export default SearchedGamesContainer;
