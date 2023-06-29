import React from 'react';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const IConsBlock = () => {
  return (
    <Box>
      <FavoriteIcon color='secondary' sx={{ fontSize: '2em' }} />
      <PersonIcon color='secondary' sx={{ fontSize: '2em' }} />
      <ShoppingBasketIcon color='secondary' sx={{ fontSize: '2em' }} />
    </Box>
  );
};

export default IConsBlock;
