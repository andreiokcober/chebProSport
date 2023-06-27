import React from 'react'

const Item = ({ item }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '690px' }}>
      <img src={item.image} alt='carousel' style={{ maxWidth: '690px' }} />
    </div>
  )
}

export default Item
