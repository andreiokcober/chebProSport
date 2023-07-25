import React, { createContext, useContext } from 'react';
import { Container, Grid } from '@mui/material';
import CardsContainer from './cards';
import CatalogMenu from './catalogMenu';
import PaginationBlock from './pagination';

export type GlobalContent = {
  count: number;
  setCount: (count: number) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  count: 0,
  setCount: () => {
    0;
  },
});
export const useGlobalContext = () => useContext(MyGlobalContext);

export const Catalog = () => {
  return (
    <div style={{ backgroundColor: '#F7F0F5' }}>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={3}>
            <CatalogMenu />
          </Grid>
          <Grid item xs={9}>
            <CardsContainer />
            <PaginationBlock />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
