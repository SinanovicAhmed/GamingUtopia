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
        <div className="absolute top-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-primary-color"></div>
        <Navigation imageIndex={gameIndex} setImageIndex={setGameIndex} />
        <GameInfo game={games[gameIndex]} />
        {games[gameIndex].background_image && (
          <div
            key={gameIndex}
            className="relative w-full h-full animate-fadeinout bg-gradient-to-b from-transparent to-primary-color"
          >
            <Image
              src={games[gameIndex].background_image}
              fill
              style={{ objectFit: "cover" }}
              alt="game background"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
