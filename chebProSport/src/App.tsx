import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

import AppStore from './store/AppStore';
import Header from './components/Header';
import Footer from './components/Footer';

import './index.css';
import { PATH_CONFIG } from './routes/RouteConfig';

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
      <AppStore>
        <Header />
        <main className='main'>
          <Routes>
            {PATH_CONFIG.map(
              ({ path, component: Component, isShow }) =>
                isShow && (
                  <Route key={path} path={path} element={<Component />} />
                ),
            )}
          </Routes>
        </main>
        <Footer />
      </AppStore>
    </ThemeProvider>
  );
}

export default App;
