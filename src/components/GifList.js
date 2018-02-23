import React from 'react'

const GifList = (props) => {
  return (
    <div>
      <img src={props.imageData.images.downsized_medium.url} alt={props.id} />
    </div>
  )
}

export default GifList
