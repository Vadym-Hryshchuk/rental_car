import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchAdverts } from '../redux/adverts/advertsOperation';
import { selectedFilter } from '../redux/filters/filtersSelector';
import { CatalogList } from '../components/CatalogList/CatalogList';
import { Loader } from 'components/Loader/Loader';
import {
  selectAdverts,
  selectIsLoading,
} from '../redux/adverts/advertsSelectors';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { filterAdverts } from 'utils/filterAdverts';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const advertsStore = useSelector(selectAdverts);
  const filtersStore = useSelector(selectedFilter);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <FilterForm />
      <CatalogList advertsStore={filterAdverts(advertsStore, filtersStore)} />
    </>
  );
};

export default CatalogPage;
