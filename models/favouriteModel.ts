import mongoose, { Types } from "mongoose";
import { Schema } from "mongoose";

const FavouriteSchema = new Schema(
  {
    game_id: {
      type: Number,
      required: [true, "Game id is missing!"],
    },
    user_email: {
      type: String,
      required: [true, "User email is missing!"],
    },
    image_url: {
      type: String,
      required: [true, "Image url is missing!"],
    },
    game_title: {
      type: String,
      required: [true, "Game title is missing!"],
    },
    rating: {
      type: Types.Decimal128,
      required: [true, "Rating is missing!"],
    },
    platforms: {
      type: [String],
      required: [true, "Platforms are missing!"],
    },
  },
  { versionKey: false }
);
const Favourite = mongoose.models.Favourite || mongoose.model("Favourite", FavouriteSchema);
export default Favourite;
