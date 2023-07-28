import PATHS from './AppRoutes';
import MainPage from '../pages/mainPage';
import Stock from '../pages/stock';
import Delivery from '../pages/delivery';
import CardsPage from '../pages/сatalogCard/catalogCards';
import Favorite from '../pages/favorite';

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
