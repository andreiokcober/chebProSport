import React from 'react';
import Item from './Item';
import Carousel from 'react-material-ui-carousel';
import { Container, Box, Typography } from '@mui/material';

export type ItemConfig = { image: string };
export type CarouselBlockPops = { data: Array<ItemConfig> };

export const CarouselBlock = ({ data }: CarouselBlockPops) => {
  return (
    <Container maxWidth='xl'>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
      >
        <Carousel sx={{ width: '690px' }}>
          {data.map((item, i) => (
            <Item {...item} key={i} />
          ))}
        </Carousel>
        <Box
          sx={{
            position: 'absolute',
            left: '0',
            top: '0',
            display: 'flex',
            zIndex: '1',
          }}
        >
          <Typography variant='h5'>ChebPROsport.BY</Typography>
        </Box>
      </Box>
    </Container>
  );
};
