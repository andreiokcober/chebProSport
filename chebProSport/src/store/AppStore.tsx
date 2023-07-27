import React, { createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/header';
import { MainPage } from '../pages/mainPage';
import Footer from '../components/footer';
import Favorite from '../pages/favorite';
import Delivery from '../pages/delivery';
import Stock from '../pages/stock';
import PATHS from '../AppRoutes';
import CardsPage from '../pages/сatalogCard/catalogCards';

export const useGlobalContext = () => useContext(MyGlobalContext);
export type GlobalContent = {
  count: Array<number>;
  setCount: (count: Array<number>) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  count: [0],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCount: () => {},
});

const AppStore = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path={PATHS.PROMOTIONS_PATH} element={<Stock />} />
          <Route path={PATHS.DELIVERY_PATH} element={<Delivery />} />
          <Route path={PATHS.PRODUCT_DETALIES} element={<CardsPage />} />
          <Route path={PATHS.FAVORITE_PATH} element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppStore;
