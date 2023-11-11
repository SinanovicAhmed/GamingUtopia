"use client";
import { IFavouriteGames } from "@/app/interfaces/Favourites";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FavouriteCard = ({ game }: { game: IFavouriteGames }) => {
  const router = useRouter();
  const removeFavourite = async (favourite_id: string) => {
    try {
      const response = await fetch("/api/favourites/" + favourite_id, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-[1800px] flex justify-between border-b-2 border-slate-700 py-2">
      <div className="flex gap-2">
        <Image className="w-[150px] h-[84px]" src={game.image_url} alt="game image" width={150} height={84} />
        <span>
          <h2 className="text-white font-bold">{game.game_title}</h2>
          <p className="text-white text-sm">Rating: {game.rating.$numberDecimal}</p>
        </span>
      </div>
      <div className="flex flex-col justify-around">
        <button
          onClick={() => removeFavourite(game._id)}
          className="text-secondary-color text-sm hover:brightness-75"
        >
          Remove favourite
        </button>
        <button className="px-2 py-1 bg-secondary-color rounded-md text-white text-sm hover:brightness-75">
          Details
        </button>
      </div>
    </div>
  );
};

export default FavouriteCard;
