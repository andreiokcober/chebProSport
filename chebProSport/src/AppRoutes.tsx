type ObjectInterface = {
  [key: string]: string;
};
const CATEGORIES_SLUG = '/:categories/';

const PATHS: ObjectInterface = {
  PROMOTIONS_PATH: '/promotions',
  DELIVERY_PATH: '/delivery',
  FAVORITE_PATH: '/favorite',
  PRODUCT_DETALIES: `${CATEGORIES_SLUG}:id`,
};

export default PATHS;
