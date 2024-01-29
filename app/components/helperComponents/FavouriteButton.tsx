"use client";
import { useSession } from "next-auth/react";
import { IResult } from "@/app/interfaces/Games";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps {
  favouriteID: string | null | undefined;
  game: IResult;
}

const FavouriteButton = ({ favouriteID, game }: IProps) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const addFavourite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/favourites", {
        method: "POST",
        body: JSON.stringify({
          game_id: game.id,
          user_email: session?.user?.email,
          image_url: game.background_image,
          game_title: game.name,
          rating: game.rating,
          platforms: game.parent_platforms.map((platform) => platform.platform.name),
        }),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeFavourite = async (favourite_id: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/favourites/" + favourite_id, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) return null;

  return (
    <>
      {favouriteID ? (
        <button
          disabled={!session}
          className={`bg-transperent hover:brightness-75 ${loading ? "animate-pulse" : ""}`}
          onClick={() => removeFavourite(favouriteID)}
        >
          <AiFillHeart style={{ color: "white" }} size={27} />
        </button>
      ) : (
        <button
          disabled={!session}
          className={`bg-transperent hover:brightness-75 ${loading ? "animate-pulse" : ""}`}
          onClick={addFavourite}
        >
          <AiOutlineHeart style={{ color: "white" }} size={27} />
        </button>
      )}
    </>
  );
};

export default FavouriteButton;
