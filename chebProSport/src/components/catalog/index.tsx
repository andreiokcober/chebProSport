import React from 'react';
import { Container, Grid } from '@mui/material';
import CardsContainer from './cards';
import CatalogMenu from './catalogMenu';

export const Catalog = () => {
  return (
    <div style={{ backgroundColor: '#F7F0F5' }}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <CatalogMenu />
          </Grid>
          <Grid item xs={10}>
            <CardsContainer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
