import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';
import Footer from './components/footer';
import Favorite from './pages/favorite';
import Delivery from './pages/delivery';
import Stock from './pages/stock';

const customTheme: ThemeOptions = {
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#772BD8',
    },
  },
};

const PROMOTIONS_PATH = '/promotions';
const DELIVERY_PATH = '/delivery';
export const FAVORITE_PATH = '/favorite';

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path={PROMOTIONS_PATH} element={<Stock />} />
            <Route path={DELIVERY_PATH} element={<Delivery />} />
            <Route path={FAVORITE_PATH} element={<Favorite />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
