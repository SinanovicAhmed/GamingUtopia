import RenderPlatform from "@/app/components/helperComponents/RenderPlatform";
import { IResult } from "@/app/interfaces/Games";
import React from "react";
import Image from "next/image";
import Achievments from "@/app/components/helperComponents/Achievments";

const getDetails = async (id: string) => {
  try {
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWR_API_KEY}`);
    const data: IResult = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const GameDetail = async ({ searchParams }: { searchParams?: { [key: string]: string } }) => {
  const game = await getDetails(searchParams?.id!);
  return (
    <div className="w-full bg-primary-color px-40">
      <h2 className="text-md md:text-3xl text-white font-bold">{game?.name}</h2>
      <div className="flex gap-5 items-center pb-5">
        <RenderPlatform platforms={game?.parent_platforms!} />
        <p className="text-white">{game?.genres[1].name}</p>
        <p className="bg-slate-700 text-slate-300 text-sm font-bold rounded-sm px-1">{game?.rating}</p>
      </div>
      <div className="w-full h-[400px] relative">
        {game?.background_image ? (
          <Image src={game?.background_image} fill style={{ objectFit: "cover" }} alt="game background" />
        ) : (
          <Image
            className="rounded-t-md"
            src="https://theokellogroup.com/wp-content/plugins/dozent/assets/images/placeholder.svg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="game bg"
          />
        )}
      </div>
      <p className="text-white font-light text-justify leading-tight py-3">{game?.description_raw}</p>
      <h2 className="text-white text-lg font-bold pb-2">Achievements</h2>
      <Achievments id={game?.id!} />
    </div>
  );
};

export default GameDetail;
