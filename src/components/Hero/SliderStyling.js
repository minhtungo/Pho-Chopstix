import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 100vh;
  padding: 0;
`;

export const CarouselCaption = styled(Carousel.Caption)`
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
`;

export const ImgContainer = styled.div``;

export const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  filter: brightness(30%);
`;

export const Logo = styled.h1`
  font-size: 2.6rem;
  color: #f2f2f2;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 0.8;
    margin-bottom: 28px;
  }
`;

export const Desc = styled.h3`
  font-family: 'Poppins' !important;
  font-size: 1.2rem;
  margin-top: -15px;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Button = styled.a`
  font-family: 'Poppins';
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  transition: 0.5s;
  line-height: 1;
  margin: 0 10px;
  margin-bottom: 10px;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.5s;
  color: #d9d9d9;
  border: 2px solid #e60a08;
  &:hover {
    background: #e60a08;
    color: #d9d9d9;
  }
`;

export const Red = styled.span`
  color: rgb(255, 31, 64);
  font-family: 'Script MT Bold';
  font-size: 2.9rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ChopStick = styled.span`
  color: #ff1f40;
  font-family: 'Caramel';
  font-size: 3.8rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const StyledSpan = styled.span`
  color: #f2f2f2;
  font-family: 'Script MT Bold';
  font-size: 2.9rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
