import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import './index.css';
import AppStore, { MyGlobalContext } from './store/AppStore';

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
  const [count, setCount] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <MyGlobalContext.Provider value={{ count, setCount }}>
        <div className='App'>
          <AppStore />
        </div>
      </MyGlobalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
