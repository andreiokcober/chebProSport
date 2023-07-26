import React, { createContext, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';
import Footer from './components/footer';
import Favorite from './pages/favorite';
import Delivery from './pages/delivery';
import Stock from './pages/stock';
import PATHS from './store/AppPath';

export const useGlobalContext = () => useContext(MyGlobalContext);
export type GlobalContent = {
  count: number;
  setCount: (count: number) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  count: 0,
  setCount: () => {
    0;
  },
});

const AppRoutes = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <MyGlobalContext.Provider value={{ count, setCount }}>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path={PATHS.PROMOTIONS_PATH} element={<Stock />} />
          <Route path={PATHS.DELIVERY_PATH} element={<Delivery />} />
          <Route path={PATHS.FAVORITE_PATH} element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </MyGlobalContext.Provider>
  );
};

export default AppRoutes;
