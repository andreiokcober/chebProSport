import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Header } from './components/header';
import { CarouselBlock } from './components/carousel';
import img1 from './image/image.png';

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

const carouselData = [{ image: img1 }, { image: img1 }, { image: img1 }];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <main style={{ backgroundColor: '#F7F0F5', padding: '40px 0px' }}>
          <Routes>
            <Route
              path='/'
              element={<CarouselBlock data={carouselData} />}
            ></Route>
            <Route path='/Акции' element={'helloy my Акции'}></Route>
            <Route path='/Доставка' element={'helloy my Доставка'}></Route>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
