import connectToDB from "@/libs/mongoDB";
import Favourite from "@/models/favouriteModel";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  await connectToDB();
  try {
    const alreadyFavourite = await Favourite.findOne({ user_email: data.user_email, game_id: data.game_id });
    if (!alreadyFavourite) {
      await Favourite.create(data);
      return NextResponse.json({ message: "You successfully added game to your favourites." });
    }
    return NextResponse.json({ message: "This game is already in your favourites." });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
