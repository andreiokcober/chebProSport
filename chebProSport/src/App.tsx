import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';
import Footer from './components/footer';
import CardsPage from './pages/сatalogCard/catalogCards';

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

const CARD_TITLE_PATH = '/:categories/:id';

const theme = createTheme(customTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main className='main'>
          <Container maxWidth={'xl'}>
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/Акции' element={'helloy my Акции'}></Route>
              <Route path='/Доставка' element={'helloy my Доставка'}></Route>
              <Route path={CARD_TITLE_PATH} element={<CardsPage />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
