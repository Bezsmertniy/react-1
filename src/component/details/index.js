import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";
import guestsImg from "./people.svg";
import bedroomsImg from "./bedroom.svg";
import bedsImg from "./bed.svg";
import bathsImg from "./bathroom.svg";

export default function Details({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border>Деталі властивості:</Heading>
      <ul className="details__list">
        {
          <ListItem imageSrc={guestsImg}>
            <span>{guests} гості</span>
          </ListItem>
        }
        {
          <ListItem imageSrc={bedroomsImg}>
            <span>{bedrooms} спальня</span>
          </ListItem>
        }
        {
          <ListItem imageSrc={bedsImg}>
            <span>{beds} ліжко</span>
          </ListItem>
        }
        {
          <ListItem imageSrc={bathsImg}>
            <span>{baths} ванна кімната</span>
          </ListItem>
        }
      </ul>
    </Box>
  );
}
