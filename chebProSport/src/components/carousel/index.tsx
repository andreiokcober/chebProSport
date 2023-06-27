import React from 'react';
import Item from './Item';
import Carousel from 'react-material-ui-carousel';

export type ItemConfig = { image: string }
type CarouselBlockPops = { data: Array<ItemConfig> }

export const CarouselBlock = ({ data }: CarouselBlockPops) => {
  return (
    <Carousel sx={{ width: '690px' }}>
      {data.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Carousel>
  );
};
