import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Carousel from '../carousel'
const Main = () => {
  return (
    <main style={{ backgroundColor: '#F7F0F5', padding: '40px 0px' }}>
      <Container maxWidth='1280px'>
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Carousel style={{ backgroundColor: 'red' }} />
          <Box
            sx={{
              position: 'absolute',
              left: '0',
              top: '0',
              display: 'flex',
              zIndex: '1',
            }}
          >
            <Typography variant='h5'>ChebPROsport.BY</Typography>
          </Box>
        </Box>
      </Container>
    </main>
  )
}

export default Main
