import { ListItem } from '../ListItem/ListItem';
import { List } from './CatalogList.styled';

export const CatalogList = ({ advertsStore }) => {
  return (
    <>
      <List>
        {advertsStore.map(value => {
          return (
            <li key={value.id}>
              <ListItem value={value} />
            </li>
          );
        })}
      </List>
    </>
  );
};
