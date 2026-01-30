import React from 'react'

const ExampleCarouselImage = ({ text, imgUrl }) => {
  return (
    <>
      <img src={imgUrl} alt={text} />
    </>
  )
}

export default ExampleCarouselImage