import React from 'react';
import Item from './item';
import { Container, Grid } from '@mui/material';
import ImageCatalog from '../../data/catalog';

export const Catalog = () => {
  return (
    <div style={{ backgroundColor: '#F7F0F5' }}>
      <Container>
        <Grid container>
          <Grid item xs={2}>
            <Grid>Каталог продукции</Grid>
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
              {ImageCatalog.map((item, i) => (
                <Item item={item} key={i}></Item>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
