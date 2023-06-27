import React from 'react'
import Item from './item'
import Carousel from 'react-material-ui-carousel'
import img1 from '../../image/image.png'

const carousel = [
  {
    image: img1,
  },
  {
    image: img1,
  },
  {
    image: img1,
  },
]

const CarouselBlock = () => {
  return (
    <Carousel sx={{ width: '690px' }}>
      {carousel.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </Carousel>
  )
}

export default CarouselBlock
