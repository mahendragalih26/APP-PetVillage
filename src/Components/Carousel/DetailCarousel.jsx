import React, { Component, Fragment, useState } from "react";
import { Carousel } from "react-bootstrap";
import bg from "../../Assets/content/1.jpg";

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
        <Carousel.Item style={{ width: "100%", height: "600px" }}>
          <img
            className="d-block w-100"
            src={bg}
            style={{ position: "relative", width: "100%", height: "100%" }}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "600px" }}>
          <img
            className="d-block w-100"
            src={bg}
            style={{ position: "relative", width: "100%", height: "100%" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "100%", height: "600px" }}>
          <img
            className="d-block w-100"
            src={bg}
            style={{ position: "relative", width: "100%", height: "100%" }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
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
