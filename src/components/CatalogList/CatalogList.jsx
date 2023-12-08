import data from "../../advertsCars.json";

import { ListItem } from "../ListItem/ListItem";
import { List } from "./CatalogList.styled";

export const CatalogList = () => {
  return (
    <List>
      {data.map((value) => {
        return (
          <li key={value.id}>
            <ListItem value={value} />
          </li>
        );
      })}
    </List>
  );
};
