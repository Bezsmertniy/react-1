import "./index.css";
import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review_head">
        <span className="review__name">{guestName}</span>
        <span className="review__info">Рейтинг: {rating}</span>
      </div>
      <span className="review__text">{review}</span>
    </Box>
  );
}
