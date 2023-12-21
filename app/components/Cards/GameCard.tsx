import { IResult } from "@/app/interfaces/Games";
import Image from "next/image";
import FavouriteButton from "../helperComponents/FavouriteButton";
import RenderPlatform from "../helperComponents/RenderPlatform";
import Link from "next/link";

const GameCard = ({ game, favouriteID }: { game: IResult; favouriteID: string | null | undefined }) => {
  return (
    <div className="w-[300px] bg-slate-800 rounded-md shadow-xl hover:brightness-90 transition-all">
      <Link
        href={{
          pathname: `/details/${game.name}`,
          query: { id: game.id },
        }}
      >
        <div className="w-[300px] h-[169px] relative rounded-t-md">
          {game.background_image ? (
            <Image
              key={game.background_image}
              className="rounded-t-md"
              src={game.background_image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="game bg"
            />
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
        <span className="flex w-full items-center justify-between border-b-[1px] border-slate-600 py-1 px-2">
          <h2 className="text-sm text-white font-bold ">{game.name}</h2>
          <p className="text-white text-[10px]">{game.rating + " / " + game.rating_top}</p>
        </span>
      </Link>
      <span className="flex w-full justify-between py-2 px-2">
        <RenderPlatform platforms={game.parent_platforms} />
        <FavouriteButton favouriteID={favouriteID} game={game} />
      </span>
    </div>
  );
};

export default GameCard;
