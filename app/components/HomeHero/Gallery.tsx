"use client";
import { IResult } from "@/app/interfaces/Games";
import Image from "next/image";
import { useState } from "react";
import Navigation from "./Navigation";
import GameInfo from "./GameInfo";

const Gallery = ({ games }: { games: IResult[] }) => {
  const [gameIndex, setGameIndex] = useState(0);

  return (
    <>
      <div className="w-full h-[600px] relative">
        <Navigation imageIndex={gameIndex} setImageIndex={setGameIndex} />
        <GameInfo game={games[gameIndex]} />
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-color"></div>
        {games[gameIndex].background_image && (
          <Image
            src={games[gameIndex].background_image}
            fill
            priority={true}
            style={{ objectFit: "cover" }}
            alt="game background"
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
