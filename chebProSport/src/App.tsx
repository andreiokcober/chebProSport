import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';
import Footer from './components/footer';
import Delivery from './pages/delivery';
import Stock from './pages/stock';
import CardsPage from './pages/сatalogCard/catalogCards';

const PROMOTIONS_PATH = '/promotions';
const DELIVERY_PATH = '/delivery';
const CARD_TITLE_PATH = '/:categories/:id';

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

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main className='main'>
          <Container maxWidth={'xl'}>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path={PROMOTIONS_PATH} element={<Stock />} />
              <Route path={DELIVERY_PATH} element={<Delivery />} />
              <Route path={CARD_TITLE_PATH} element={<CardsPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
