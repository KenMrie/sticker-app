import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselPlaceholder from '../../assets/images/CarouselPlaceholder.png'
import CarouselPlaceholder2 from '../../assets/images/CarouselPlaceholder2.png'
import CarouselPlaceholder3 from '../../assets/images/CarouselPlaceholder3.png'

export const CarouselHome = () => {
  return (
    <>
 <Carousel>
      <Carousel.Item>
        <img src={CarouselPlaceholder} text="First slide" className="d-block w-100" alt="..." style={{height:"370px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselPlaceholder2} text="Second slide" className="d-block w-100" alt="..." style={{height:"359px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselPlaceholder3} text="Third slide"className=" d-block w-100" alt="..." style={{height:"359px"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
