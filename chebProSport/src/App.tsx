import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';
import Footer from './components/footer';
import Delivery from './pages/delivery';

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

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route
              path={PROMOTIONS_PATH}
              element={'helloy my Доставка'}
            ></Route>
            <Route path={DELIVERY_PATH} element={<Delivery />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
