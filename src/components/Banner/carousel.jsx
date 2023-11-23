import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { carouselHomeInfo } from "../../configs/carouselhome/carouselhome";

export const CarouselHome = () => {
  console.log(carouselHomeInfo);
  return (
    <>
      <Carousel>
        {carouselHomeInfo.map((carouselInfo, index) => (
          <Carousel.Item key={index}>
            <img
              src={carouselInfo.imagen}
              text="First slide"
              className="d-block w-100"
              alt="..."
              style={{ height: "370px" }}
            />
            <Carousel.Caption>
              <h3> {carouselInfo.title} </h3>
              <p> {carouselInfo.subtitle} </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
