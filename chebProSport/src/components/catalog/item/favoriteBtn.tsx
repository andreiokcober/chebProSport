import React from 'react';
import { Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useGlobalContext } from '../../../store/AppStore';

type FavoriteProp = {
  id: number;
};

const FavoriteBtn = ({ id }: FavoriteProp) => {
  const { favoriteCount, setFavoriteCount } = useGlobalContext();
  const isFavoritesEmpty = favoriteCount.includes(+id);

  const handelFavorite = () => {
    if (isFavoritesEmpty) {
      const newCount = favoriteCount.filter((item) => item !== id);
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
          <FavoriteIcon color={isFavoritesEmpty ? 'error' : 'secondary'} />
        }
      >
        Добавить
        <br />в избранное
      </Badge>
    </Button>
  );
};

export default FavoriteBtn;
