import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Link, Typography, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BasketBtn from '../../components/catalog/item/basketBtn';
import CardCatalog from '../../data/catalog';
import { CardProp } from '../../components/catalog/item';
import BasicTabs from './tabs/tabsCard';

const CardsPage = () => {
  const [post, setPost] = useState<CardProp>({
    item: {
      id: 0,
      image: '',
      title: '',
      score: 0,
      price: '',
      categories: '',
      production: '',
      type: '',
      weight: '',
      description: '',
    },
  });

  const { id } = useParams();

  useEffect(() => {
    CardCatalog.find((item) => {
      if (item.id.toString() === id) {
        setPost({ item });
      }
    });
  }, [id]);

  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' href='/'>
      Главная
    </Link>,
    <Typography key='2' color='text.primary'>
      {post.item.title}
    </Typography>,
  ];

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='breadcrumb'
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Typography component={'h3'}>{post.item.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sx={{ display: 'flex', flexGrow: '1' }}>
              <Box>
                <Box sx={{ marginRight: '40px' }}>
                  <img
                    style={{ width: '180px' }}
                    src={post.item.image}
                    alt='image-card'
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant='body2'
                  component={'div'}
                  sx={{ color: '#47B315', mb: '10px' }}
                >
                  в наличии {post.item.score}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Объем: {post.item.weight}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Тип: {post.item.type}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Производсто: {post.item.production}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: 'center', mb: '5px' }}>
                {post.item.price}
              </Typography>
              <Box
                sx={{
                  marginLeft: '0',
                }}
              >
                <BasketBtn />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <BasicTabs description={post.item.description} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardsPage;
