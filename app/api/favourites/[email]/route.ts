import connectToDB from "@/libs/mongoDB";
import Favourite from "@/models/favouriteModel";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { email: string } }) {
  await connectToDB();
  try {
    const games = await Favourite.find({ user_email: params.email });
    return NextResponse.json({ data: games });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function DELETE(req: Request, { params }: { params: { email: string } }) {
  await connectToDB();
  try {
    const games = await Favourite.findOneAndDelete({ _id: params.email });
    if (games === null) {
      return NextResponse.json({ message: "Game with this ID does not exist in favorites." });
    } else {
      return NextResponse.json({ message: "Successfully removed game from favourites!" });
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}
