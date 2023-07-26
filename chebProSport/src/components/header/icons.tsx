import React from 'react';
import { Box, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../AppRoutes';
import PATHS from '../../store/AppPath';

const IConsBlock = () => {
  const { count } = useGlobalContext();
  return (
    <Box sx={{ display: 'flex' }}>
      <Link to={PATHS.FAVORITE_PATH}>
        <Badge badgeContent={count} color='secondary'>
          <FavoriteIcon color='secondary' sx={{ fontSize: '2em' }} />
        </Badge>
      </Link>
      <PersonIcon color='secondary' sx={{ fontSize: '2em' }} />
      <ShoppingBasketIcon color='secondary' sx={{ fontSize: '2em' }} />
    </Box>
  );
};

export default IConsBlock;
