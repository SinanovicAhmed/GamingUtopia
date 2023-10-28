import { IGames } from "@/app/interfaces/Games";
import React from "react";
import Gallery from "./Gallery";
import GameCard from "../Cards/GameCard";

const getGames = async () => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWR_API_KEY}&page_size=10`);
  const data: IGames = await res.json();
  return data;
};

const MainView = async () => {
  const games = await getGames();

  return (
    <div className="w-full">
      <Gallery games={games.results} />
    </div>
  );
};

export default MainView;
