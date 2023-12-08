import data from "../../advertsCars.json";

import { ListItem } from "../ListItem/ListItem";
import { List } from "./CatalogList.styled";

export const CatalogList = () => {
  const test = (e) => {
    console.dir(e.target.nodeName);
  };
  return (
    <List>
      {data.map((value) => {
        return (
          <li key={value.id} onClick={test}>
            <ListItem value={value} />
          </li>
        );
      })}
    </List>
  );
};
