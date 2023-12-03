import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";
import poolImg from "./outline-pool.svg";
import gymImg from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parkingImg from "./parking-location.svg";
import pets from "./pets.svg";
import airport from "./airport.svg";
import concierge from "./concierge.svg";
import roomSer from "./room-outline.svg";
import child from "./child.svg";

export default function Amenities({
  pool,
  gym,
  freeBreakfast,
  freeWiFi,
  parking,
  petsAllowed,
  airportShuttle,
  conciergeService,
  roomService,
  childFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>
      <ul className="amenities__list">
        {pool && (
          <ListItem imageSrc={poolImg}>
            <span>Басейн</span>
          </ListItem>
        )}

        {gym && (
          <ListItem imageSrc={gymImg}>
            <span>Басейн</span>
          </ListItem>
        )}

        {freeBreakfast && (
          <ListItem imageSrc={breakfast}>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {freeWiFi && (
          <ListItem imageSrc={wifi}>
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {parking && (
          <ListItem imageSrc={parkingImg}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {petsAllowed && (
          <ListItem imageSrc={pets}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {airportShuttle && (
          <ListItem imageSrc={airport}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {conciergeService && (
          <ListItem imageSrc={concierge}>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {roomService && (
          <ListItem imageSrc={roomSer}>
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {childFriendly && (
          <ListItem imageSrc={child}>
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
