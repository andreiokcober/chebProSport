export const PROMOTIONS_PATH = '/promotions';
export const DELIVERY_PATH = '/delivery';
export const CARD_TITLE_PATH = '/:categories/:id';

const CATEGORIES_SLUG = '/:categories/';

const PATHS = {
  BASE: '/',
  CATEGORIES: CATEGORIES_SLUG,
  DELIVERY_PATH,
  FAVORITE_PATH: '',
  PROMOTIONS_PATH,
  PRODUCT_DETAILS: `${CATEGORIES_SLUG}/:id`,
};

export default PATHS;
