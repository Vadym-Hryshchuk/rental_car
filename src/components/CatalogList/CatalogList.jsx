import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../ListItem/ListItem';
import { List } from './CatalogList.styled';

import { fetchAdverts } from '../../redux/advertsOperation';
import { selectAdverts, selectIsLoading } from '../../redux/advertsSelectors';
import { Loader } from 'components/Loader/Loader';
export const CatalogList = () => {
  const dispatch = useDispatch();
  const advertsStore = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
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
