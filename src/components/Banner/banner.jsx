import React from 'react'
import BannerPlaceholder from '../../assets/images/BannerPlaceholder.png'

export const Banner = () => {
  return (
    <>
<div id="carouselExampleControls" className="carousel slide">
  <div className="carousel-inner">
      <img src={BannerPlaceholder} className="d-block w-100" alt="..." style={{height:"359px"}}/>
    </div>
    </div>
    </>
  )
}
