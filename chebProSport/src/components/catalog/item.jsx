import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Grid, Box } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Badge from '@mui/material/Badge'

const Item = (prop) => {
  const { item } = prop
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card sx={{ maxWidth: '245px', height: '313px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', height: '190px' }}>
          <img src={item.image} alt='Catalog Card' style={{ paddingTop: '15px' }} />
        </Box>
        <CardContent sx={{ padding: '5px 5px 11px 10px' }}>
          <Typography gutterBottom variant='h6' component='span'>
            {item.title}
          </Typography>
          <Typography variant='body2' sx={{ color: '#47B315' }}>
            в наличии {item.score}
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingTop: '2px' }}>
          <Button
            variant='contained'
            size='small'
            color="secondary"
            sx={ {padding: '4px 6px' }}
          >
            <Typography
              variant='body2'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '12px',
              }}
            >
              <ShoppingBasketIcon sx={{ mr: '5px' }} />В корзину
            </Typography>
          </Button>
          <Button size='small' sx={{ fontSize: '10px', textDecoration: 'underline' }}>
            <Badge badgeContent={' 0'} color='secondary'>
              Добавить
              <br />в избранное
            </Badge>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Item
