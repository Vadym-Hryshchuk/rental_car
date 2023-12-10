import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAdverts } from '../redux/adverts/advertsOperation';
import { CatalogList } from '../components/CatalogList/CatalogList';
import { Loader } from 'components/Loader/Loader';
import {
  selectAdverts,
  selectIsLoading,
} from '../redux/adverts/advertsSelectors';
import { FilterForm } from 'components/FilterForm/FilterForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const advertsStore = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <FilterForm />
      <CatalogList advertsStore={advertsStore} />
    </>
  );
};

export default CatalogPage;
