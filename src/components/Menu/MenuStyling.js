import styled from 'styled-components';

export const MainContainer = styled.section`
  text-align: center;
  padding: 60px 13.2px 30px 13.2px;
  background-image: linear-gradient(315deg, #000000 0%, #0d0d0d 74%);
`;

export const Column = styled.div`
  padding: 6px;
  margin-bottom: 0px;

  & ul {
    padding: 12px 0 5px 0;
    margin: 0 auto;
    border-top: 1.5px dashed #595959;
    border-bottom: 1.5px dashed #595959;
    list-style: none;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const FoodCategory = styled.h4`
  font-size: 1.2rem;
  text-align: center;
  color: #e60a08;
  margin: 6px 0;
`;

export const ListItem = styled.button`
  cursor: pointer;
  display: flex;
  padding: 9px 10px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #d9d9d9;
  margin: 0 5px 5px 0;
  transition: all ease-in-out 0.3s;
  background: transparent;
  border: 2px solid #e60a08;
  border-radius: 15px;
  align-items: center;

  &:hover,
  &:focus {
    background: #e60a08;
    color: #d9d9d9;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StyledContainer = styled.section`
  padding: 5px 13.2px 15px 13.2px !important;
`;
export const Card = styled.div`
  cursor: pointer;
  height: 100%;
  background: rgba(13, 13, 13, 0.4);
  border-radius: 5px;
  border: 1px solid rgb(26, 26, 26);
  overflow: hidden;
  margin: 6px 0;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  -webkit-transition: 0.1s;
  transition: border-color 250ms ease-in-out 0s;
  &:hover {
    border-color: rgb(38, 38, 38);
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const ImageContainer = styled.div`
  display: block;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 5px;
  -o-object-fit: cover;
  object-fit: cover;
  @media (max-width: 768px) {
    height: 210px;
  }
`;

export const Content = styled.div`
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
  @media (min-width: 768px) {
    padding: 16px;
  }
`;
export const FoodName = styled.h3`
  color: #e6e6e6;
  font-weight: 400;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
export const FoodModalName = styled.h3`
  color: #e6e6e6;
  font-weight: 400;
  margin: 0;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const FoodDesc = styled.h5`
  color: #e6e6e6;
  padding-top: 8px;
  font-weight: 300;
  line-height: 20px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const Price = styled.h4`
  font-weight: 400;
  text-align: right;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoContainer = styled.ul`
  padding: 0;

  & li {
    list-style: none;
    font-size: 0.1rem;
    padding-bottom: 10px;
  }
`;

export const ItemName = styled.h5`
  font-weight: 300;
  color: rgb(255, 31, 64);
  margin-bottom: 2px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ItemRow = styled.div`
  align-items: center;
  padding: 2px 0;
  line-height: 8px;
  &:hover p {
    color: #bfbfbf;
  }
  &:hover h6 {
    color: #ffd11a;
  }
`;
export const ItemPrice = styled.h6`
  margin-bottom: 0;
  color: #ffd633;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const ItemSize = styled.p`
  margin-bottom: 0;
  color: #cccccc;
  font-weight: 300;
  font-size: 13px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
export const Note = styled.p``;
