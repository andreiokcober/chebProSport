import React from 'react';
import { CarouselBlock } from '../components/carousel';
import { Catalog } from '../components/catalog';

import img1 from '../image/image.png';

const carouselData = [{ image: img1 }, { image: img1 }, { image: img1 }];

const MainPage = () => {
  return (
    <>
      <CarouselBlock data={carouselData} />
      <Catalog />
    </>
  );
};
export default MainPage;
