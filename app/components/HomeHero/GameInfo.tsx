import { IResult } from "@/app/interfaces/Games";
import React from "react";
import RenderPlatform from "../helperComponents/RenderPlatform";
import FavouriteButton from "../helperComponents/FavouriteButton";
import { formatDate } from "@/app/helperFunctions/formatDate";

const GameInfo = ({ game }: { game: IResult }) => {
  return (
    <div
      className="absolute z-20 p-5 bottom-5 md:bottom-auto md:top-[35%] w-[95%] md:w-auto bg-primary-color 
                 bg-opacity-50 rounded-md left-1/2 md:left-[10%] transform -translate-x-1/2 md:translate-x-0"
    >
      <h2 className="mb-2 text-white text-xl xs:text-2xl md:text-4xl font-bold border-b-2 border-white">
        {game.name}
      </h2>
      <span className="flex gap-1">
        <p className="text-white text-sm">Platforms:</p>
        <RenderPlatform platforms={game.parent_platforms} />
      </span>

      <p className="text-white text-sm py-1">Game rating: {game.rating + " / " + game.rating_top}</p>
      <p className="text-white text-sm">Release date: {formatDate(game.released)}</p>
      <span className="flex justify-between mt-5">
        <button className="px-4 py-1 hover:brightness-75 text-white bg-secondary-color rounded-md">
          Details
        </button>
      </span>
    </div>
  );
};

export default GameInfo;
