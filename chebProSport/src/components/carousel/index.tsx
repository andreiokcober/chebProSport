import React from 'react';
import { Container, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import Item from './Item';

export type ItemConfig = { image: string };
export type CarouselBlockPops = { data: Array<ItemConfig> };

export const CarouselBlock = ({ data }: CarouselBlockPops) => {
  return (
    <Container maxWidth='xl'>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel sx={{ width: '690px' }}>
          {data.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};
