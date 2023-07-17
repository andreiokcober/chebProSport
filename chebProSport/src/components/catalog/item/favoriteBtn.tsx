import React, { useState } from 'react';
import { Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteBtn = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handelFavorite = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
  };

  return (
    <Button
      onClick={handelFavorite}
      size='small'
      sx={{ fontSize: '10px', textDecoration: 'underline', color: 'black' }}
    >
      <Badge
        badgeContent={
          <FavoriteIcon color={isFavorite ? 'error' : 'secondary'} />
        }
      >
        Добавить
        <br />в избранное
      </Badge>
    </Button>
  );
};

export default FavoriteBtn;
