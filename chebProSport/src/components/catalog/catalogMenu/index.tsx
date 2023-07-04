import React from 'react';
import { Grid, List, Typography } from '@mui/material';
import ButtonCatalogMenu from './button';

const CatalogMenu = () => {
  return (
    <Grid>
      <Typography variant='h5' component={'h2'}>
        Каталог продукции
      </Typography>
      <List component='nav'>
        <ButtonCatalogMenu
          name={'Протеин'}
          content={['Сывороточный', 'Казеиновый']}
        />
        <ButtonCatalogMenu
          name={'Гейнер'}
          content={['Высокоуглеводные', 'Высокобелковые', 'Углеводы (карбо)']}
        />
        <ButtonCatalogMenu
          name={'Креатин'}
          content={['Креатин в капсулах', 'Креатин моногидрат']}
        />
        <ButtonCatalogMenu
          name={'Аминокислоты'}
          content={[
            'неполярные (гидрофобные)',
            'полярные (гидрофильные)',
            'отрицательно заряженные',
            'положительно заряженные',
          ]}
        />
      </List>
    </Grid>
  );
};

export default CatalogMenu;
