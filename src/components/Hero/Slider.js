// import { useState } from "react";
import { Carousel } from 'react-bootstrap';
import { sliderItems } from '../../data';
import 'animate.css';

import {
  StyledCarousel,
  CarouselCaption,
  ImgContainer,
  Image,
  Logo,
  Desc,
  Button,
  Red,
  ChopStick,
  StyledSpan,
} from './SliderStyling';

const Slider = () => {
  return (
    <StyledCarousel fade='true' pause='false' id='home'>
      {sliderItems.map((item) => (
        <Carousel.Item
          interval={3400}
          key={item.id}
          className='align-items-center'
        >
          <ImgContainer>
            <Image
              className='d-block w-100'
              src={item.img}
              alt='Slider Images'
            />
          </ImgContainer>
          <CarouselCaption>
            <Logo className='animate__animated animate__fadeInDown'>
              Welcome to{' '}
              <Red>
                Phở<StyledSpan>Chopsti</StyledSpan>
              </Red>
              <ChopStick>X</ChopStick>
            </Logo>
            <Desc className='animate__animated animate__zoomIn'>
              {item.desc}
            </Desc>
            <Button
              href='#menu'
              className='animate__animated animate__fadeInUp'
            >
              Our Menu
            </Button>
          </CarouselCaption>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default Slider;
