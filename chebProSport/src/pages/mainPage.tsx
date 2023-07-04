import React from 'react';
import { CarouselBlock } from '../components/carousel/index';
import img1 from '../image/image.png';
import { Catalog } from '../components/catalog';

const carouselData = [{ image: img1 }, { image: img1 }, { image: img1 }];

export const MainPage = () => {
  return (
    <div>
      <CarouselBlock data={carouselData} />
      <Catalog />
    </div>
  );
};
