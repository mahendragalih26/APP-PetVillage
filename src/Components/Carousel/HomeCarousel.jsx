import React, { Component, Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";

import bg from "../../Assets/bg/car2.jpg";
import bg2 from "../../Assets/bg/car3.jpg";
import bg3 from "../../Assets/bg/car4.jpg";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item style={{ width: "100%", height: "290px" }}>
          <img
            className="d-block w-100"
            src={bg}
            alt="First slide"
            style={{ width: "100%", height: "auto" }}
          />
          <Carousel.Caption>
            <h3>Ajak Bermain Mereka</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "290px" }}>
          <img
            className="d-block w-100"
            src={bg2}
            alt="Second slide"
            style={{ width: "100%", height: "auto" }}
          />

          <Carousel.Caption>
            <h3>donasi anda sangat berharga</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "290px" }}>
          <img
            className="d-block w-100"
            src={bg3}
            alt="Third slide"
            style={{ width: "100%", height: "auto" }}
          />

          <Carousel.Caption>
            <h3>bantu organisasi kami</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default HomeCarousel;
