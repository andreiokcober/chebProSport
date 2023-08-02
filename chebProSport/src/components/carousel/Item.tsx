import React from 'react';

import { ItemConfigType } from './Index';

const Item = ({ image }: ItemConfigType) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', maxWidth: '690px' }}
    >
      <img src={image} alt='carousel' style={{ maxWidth: '690px' }} />
    </div>
  );
};

export default Item;
