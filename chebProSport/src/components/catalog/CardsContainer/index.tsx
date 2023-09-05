import React from 'react';

import ProductFetch from '../../../data/ProductFetch';
import CardsList from './CardsList';
import Loading from './Loading';

const CardsContainer = () => {
  const {
    data: product,
    isPending,
    error,
  } = ProductFetch('http://localhost:8000/product');

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <Loading />}
      {product && <CardsList product={product} />}
    </div>
  );
};

export default CardsContainer;
