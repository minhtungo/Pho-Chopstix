import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const FeatureContainer = styled(Container)`
  text-align: center;
  background-image: linear-gradient(315deg, #000000 0%, #0d0d0d 74%);
  padding-top: 60px !important;
  padding-bottom: 0px;
  ${
    '' /* @media (max-width: 720px) {
    padding-bottom: 0;
    margin-bottom: 0;
    padding-top: 1rem;
  } */
  }
`;

export const StyledCol = styled(Col)`
  margin: 0 10px;
  text-align: center;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;
  ${
    '' /* border: 1px solid rgb(51, 51, 51);
  border-radius: 5px;
  background-color: rgb(26, 26, 26); */
  }
  ${
    '' /* &:hover {
    background-color: #e60a08;
    font-size: 100% + 1rem;
  } */
  }
`;
export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
export const Title = styled.h3`
  color: rgb(255, 31, 64);
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.45rem;
    text-align: center;
  }
`;
export const Desc = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-align: justify;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const FeatureTitle = styled.h3`
  font-size: 1rem;
  margin-top: 20px;
`;
export const FeatureDesc = styled.p`
  margin-bottom: 20px;
  font-size: 0.8rem;
  font-weight: 300;
`;

export const Phone = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  color: rgb(255, 31, 64);
  &:hover {
    font-weight: bold;
    color: rgb(255, 31, 64);
  }
`;
