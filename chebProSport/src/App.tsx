import React from 'react';
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

const carouselData = [
  {
    image: img1,
  },
  {
    image: img1,
  },
  {
    image: img1,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <CarouselBlock data={carouselData} />
      </div>
    </ThemeProvider>
  );
}

export default App;
