import React from 'react';
import { Grid } from '@mui/material';
import Item from './item';
import ImageCatalog from '../../data/catalog';

const CardsContainer = () => (
  <Grid container spacing={3} sx={{ paddingTop: '20px' }}>
    {ImageCatalog.map((item, i) => (
      <Item item={item} key={i}></Item>
    ))}
  </Grid>
);

export default CardsContainer;
