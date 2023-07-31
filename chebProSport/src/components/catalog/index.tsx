import React from 'react';
import { Container, Grid } from '@mui/material';

import CardsContainer from './Cards';
import CatalogMenu from './CatalogMenu/Index';
import PaginationBlock from './Pagination';

const Catalog = () => {
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

export default Catalog;
