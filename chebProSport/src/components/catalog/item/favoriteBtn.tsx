import React, { useState } from 'react';
import { Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../../../store/AppStore';

const FavoriteBtn = () => {
  const { count, setCount } = useGlobalContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handelFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      setCount(count - 1);
    } else {
      setIsFavorite(true);
      setCount(count + 1);
    }
  };

  return (
    <Button
      onClick={handelFavorite}
      size='small'
      sx={{
        fontSize: '10px',
        textDecoration: 'underline',
        color: 'black',
        ml: '10px',
      }}
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
