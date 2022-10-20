import React from 'react';
import Slider from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { carouselData } from '../../../dummy-data/data';
import CarouselItem from './CarouselItem';

const responsive = {
  all: {
    breakpoint: { max: 6000, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Carousel = () => {
  return (
    <Slider
      removeArrowOnDeviceType={['tablet', 'mobile']}
      autoPlay={true}
      keyBoardControl={true}
      responsive={responsive}
    >
      {carouselData.map((slide, index) => (
        <CarouselItem key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default Carousel;
