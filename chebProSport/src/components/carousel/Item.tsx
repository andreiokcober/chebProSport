import React from 'react';
import { ItemConfig } from './index';

const Item = ({ image }: ItemConfig) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '690px' }}>
      <img src={image} alt='carousel' style={{ maxWidth: '690px' }} />
    </div>
  );
};

export default Item;
