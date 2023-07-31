import React from 'react';
import { Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useGlobalContext } from '../../../store/AppStore';

type FavoriteProp = {
  id: number;
};

const FavoriteBtn = ({ id }: FavoriteProp) => {
  const { FavoriteCount, setFavoriteCount } = useGlobalContext();
  const handelFavorite = () => {
    if (FavoriteCount.includes(+id)) {
      const newCount = FavoriteCount.filter((item) => item !== id);
      setFavoriteCount(newCount);
    } else {
      setFavoriteCount((prevCount) => [...prevCount, id]);
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
          <FavoriteIcon
            color={FavoriteCount.includes(id) ? 'error' : 'secondary'}
          />
        }
      >
        Добавить
        <br />в избранное
      </Badge>
    </Button>
  );
};

export default FavoriteBtn;
