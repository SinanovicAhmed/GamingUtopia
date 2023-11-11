export interface IFavouriteGames {
  _id: string;
  game_id: number;
  user_email: string;
  image_url: string;
  game_title: string;
  rating: { $numberDecimal: number };
  platforms: string[];
}
