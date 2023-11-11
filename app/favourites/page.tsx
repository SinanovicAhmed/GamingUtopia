import React from "react";
import { IFavouriteGames } from "../interfaces/Favourites";
import { handler } from "../api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import FavouriteCard from "../components/Cards/FavouriteCard";

const getFavourites = async (email: string) => {
  try {
    const res = await fetch("http://localhost:3000/api/favourites/" + email, {
      next: { tags: ["favourites"] },
    });
    const { data }: { data: IFavouriteGames[] } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const FavouritesPage = async () => {
  const session = (await getServerSession(handler)) as Session;
  const favourites = session?.user ? await getFavourites(session.user.email!) : [];

  return (
    <div className="w-full min-h-screen bg-primary-color md:px-10">
      {favourites?.length === 0 ? (
        <p className="text-white w-full text-center pt-10">
          You have no games added to favourites. To add games to favourite click on hearth icon that is inside
          game cards!
        </p>
      ) : (
        favourites?.map((game) => <FavouriteCard key={game._id} game={game} />)
      )}
    </div>
  );
};

export default FavouritesPage;
