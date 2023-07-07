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

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/Акции' element={'helloy my Акции'}></Route>
            <Route path='/Доставка' element={<Delivery />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
