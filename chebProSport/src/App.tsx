import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import { Header } from './components/header';
import { MainPage } from './pages/mainPage';

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
            <Route path='/Доставка' element={'helloy my Доставка'}></Route>
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
