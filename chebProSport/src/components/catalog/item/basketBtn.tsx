import React from 'react';
import { Button, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const BasketBtn = () => {
  return (
    <Button
      variant='contained'
      size='small'
      color='secondary'
      sx={{ padding: '4px 6px' }}
    >
      <Typography
        variant='body2'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12px',
        }}
      >
        <ShoppingBasketIcon sx={{ mr: '5px' }} />В корзину
      </Typography>
    </Button>
  );
};

export default BasketBtn;
