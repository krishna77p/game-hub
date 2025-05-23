import Genre from "./Genre";
import Platform from "./Platform";
import  publisher  from "./Publisher";


export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: publisher[];
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;

}
