import { useSelector } from 'react-redux';

import { selectFavorites } from '../redux/favorites/favoritesSelectors';
import { CatalogList } from '../components/CatalogList/CatalogList';

const FavoritePage = () => {
  const favoritesStore = useSelector(selectFavorites);

  return <CatalogList advertsStore={favoritesStore} />;
};

export default FavoritePage;
