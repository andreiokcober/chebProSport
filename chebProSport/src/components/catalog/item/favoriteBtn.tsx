import React from 'react';
import { Button, Badge } from '@mui/material';

const FavoriteBtn = () => {
  return (
    <Button
      size='small'
      sx={{
        fontSize: '10px',
        textDecoration: 'underline',
        color: 'black',
        ml: '10px',
      }}
    >
      <Badge badgeContent={' 0'} color='secondary'>
        Добавить
        <br />в избранное
      </Badge>
    </Button>
  );
};

export default FavoriteBtn;
