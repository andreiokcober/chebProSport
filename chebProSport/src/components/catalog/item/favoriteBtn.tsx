import React from 'react';
import { Button, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalContext } from '../../../store/AppStore';

type FavoriteProp = {
  id: number;
};

const FavoriteBtn = ({ id }: FavoriteProp) => {
  const { count, setCount } = useGlobalContext();

  const handelFavorite = () => {
    if (count.includes(id)) {
      const newCount = count.filter((item) => item !== id);
      setCount(newCount);
    } else {
      setCount([...count, id]);
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
          <FavoriteIcon color={count.includes(id) ? 'error' : 'secondary'} />
        }
      >
        Добавить
        <br />в избранное
      </Badge>
    </Button>
  );
};

export default FavoriteBtn;
