import React from 'react';
import { Grid, ThemeProvider } from '@mui/material';
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
]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} alignItems="center">
            <CarouselBlock data={carouselData}/>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
