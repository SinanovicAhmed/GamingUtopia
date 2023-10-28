import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const FavouriteButton = ({ isFavourite }: { isFavourite: boolean }) => {
  return (
    <>
      {isFavourite ? (
        <button className="bg-transperent hover:brightness-75">
          <AiFillHeart style={{ color: "white" }} size={27} />
        </button>
      ) : (
        <button className="bg-transperent hover:brightness-75">
          <AiOutlineHeart style={{ color: "white" }} size={27} />
        </button>
      )}
    </>
  );
};

export default FavouriteButton;
