import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';
import { Button, Container, Grid, Link, Typography, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BasketBtn from '../../components/catalog/item/basketBtn';
import CardCatalog from '../../data/catalog';

const CardsPage = () => {
  const [post, setPost] = useState({});
  const [openDescription, setOpenDescription] = useState(true);
  const { id } = useParams();

  const buttonInfo = useRef();
  const buttonReview = useRef();

  useEffect(() => {
    CardCatalog.find((item) => {
      if (item.id.toString() === id) {
        setPost(item);
      }
    });
  }, [id]);

  const breadcrumbs = [
    <Link underline='hover' key='1' color='inherit' href='/'>
      Главная
    </Link>,
    <Typography key='2' color='text.primary'>
      {post.title}
    </Typography>,
  ];

  const handlerButtonInfo = () => {
    setOpenDescription(true);
    buttonReview.current.classList.remove('active-btn');
    buttonInfo.current.classList.add('active-btn');
  };
  const handlerButtonReview = () => {
    setOpenDescription(false);
    buttonInfo.current.classList.remove('active-btn');
    buttonReview.current.classList.add('active-btn');
  };

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
          <Typography component={'h3'}>{post.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sx={{ display: 'flex', flexGrow: '1' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    marginRight: '40px',
                  }}
                >
                  <img style={{ width: '180px' }} src={post.image} alt='' />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    marginTop: '5px',
                  }}
                >
                  <Button
                    className='active-btn'
                    onClick={handlerButtonInfo}
                    ref={buttonInfo}
                    sx={{ background: 'none', color: '#000000' }}
                  >
                    Описание
                  </Button>
                  <div style={{ fontSize: '1.1em' }}>|</div>
                  <Button
                    onClick={handlerButtonReview}
                    ref={buttonReview}
                    sx={{ color: '#000000' }}
                  >
                    Отзывы
                  </Button>
                </div>
              </div>
              <div>
                <Typography
                  variant='body2'
                  component={'div'}
                  sx={{ color: '#47B315', mb: '10px' }}
                >
                  в наличии {post.score}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Объем: {post.weight}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Тип: {post.type}
                </Typography>
                <Typography component={'p'} variant='body2'>
                  Производсто: {post.production}
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: 'center' }}>{post.price}</Typography>
              <Box
                sx={{
                  marginLeft: '0',
                }}
              >
                <BasketBtn />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {openDescription ? post.description : 'Отзывы пока отсутствуют'}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardsPage;
