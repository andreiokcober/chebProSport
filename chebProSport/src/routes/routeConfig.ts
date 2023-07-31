import PATHS from './AppRoutes';
import MainPage from '../pages/MainPage';
import Stock from '../pages/Stock';
import Delivery from '../pages/Delivery';
import CardsPage from '../pages/CatalogCard/CatalogCards';
import Favorite from '../pages/Favorite/Index';

export const PATH_CONFIG = [
  {
    path: PATHS.BASE,
    component: MainPage,
    isShow: true,
  },
  {
    path: PATHS.PROMOTIONS_PATH,
    component: Stock,
    isShow: true,
  },
  {
    path: PATHS.DELIVERY_PATH,
    component: Delivery,
    isShow: true,
  },
  {
    path: PATHS.PRODUCT_DETAILS,
    component: CardsPage,
    isShow: true,
  },
  {
    path: PATHS.FAVORITE_PATH,
    component: Favorite,
    isShow: true,
  },
];
