import Heading from "../heading";
import Box from "../box";
import "./index.css";
import ListItem from "../list-item";

export default function Properties({
  rules,
  policy,
  transportation,
  languages,
  offers,
}) {
  return (
    <Box shadow className="propeties">
      <Heading border>Додаткові властивості</Heading>

      <ul className="propeties__list">
        {
          <ListItem title="Правила дому">
            <span>{rules}</span>
          </ListItem>
        }

        {
          <ListItem title="Політика скасування">
            <span>{policy}</span>
          </ListItem>
        }

        {
          <ListItem title="Місцевий транспорт">
            <span>{transportation}</span>
          </ListItem>
        }

        {<ListItem title="Мови хоста">{languages.join(", ")}</ListItem>}

        {
          <ListItem title="Спеціальні пропозиції:">
            <span>{offers}</span>
          </ListItem>
        }
      </ul>
    </Box>
  );
}
