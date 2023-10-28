import { IResult } from "@/app/interfaces/Games";
import Image from "next/image";
import FavouriteButton from "../helperComponents/FavouriteButton";
import RenderPlatform from "../helperComponents/RenderPlatform";

const GameCard = ({ game }: { game: IResult }) => {
  return (
    <div className="w-[300px] bg-slate-800 rounded-md shadow-xl hover:brightness-90 transition-all">
      <div className="w-[300px] h-[169px] relative rounded-t-md">
        <Image className="rounded-t-md" src={game.background_image} fill alt="game bg" />
      </div>
      <span className="flex w-full items-center justify-between border-b-[1px] border-slate-600 py-1 px-2">
        <h2 className="text-sm text-white font-bold ">{game.name}</h2>
        <p className="text-white text-[10px]">{game.rating + " / " + game.rating_top}</p>
      </span>

      <span className="flex w-full justify-between py-2 px-2">
        <RenderPlatform platforms={game.parent_platforms} />

        <FavouriteButton isFavourite={false} />
      </span>
    </div>
  );
};

export default GameCard;
