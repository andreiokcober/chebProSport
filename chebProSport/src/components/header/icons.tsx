import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { useGlobalContext } from '../../store/AppStore';
import PATHS from '../../routes/AppRoutes';

const IConsBlock = () => {
  const { count } = useGlobalContext();
  return (
    <Box sx={{ display: 'flex' }}>
      <Link to={PATHS.FAVORITE_PATH}>
        <Badge badgeContent={count.length} color='secondary'>
          <FavoriteIcon color='secondary' sx={{ fontSize: '2em' }} />
        </Badge>
      </Link>
      <PersonIcon color='secondary' sx={{ fontSize: '2em' }} />
      <ShoppingBasketIcon color='secondary' sx={{ fontSize: '2em' }} />
    </Box>
  );
};

export default IConsBlock;
