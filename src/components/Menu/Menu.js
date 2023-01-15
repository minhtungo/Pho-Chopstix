import { StyledSection, SectionTitle, SectionDesc } from '../SectionStyling';
import React, { useState, useEffect, useRef } from 'react';
import { foods } from '../../data';
import { Row } from 'react-bootstrap';
import {
  MainContainer,
  Column,
  ListItem,
  StyledContainer,
} from './MenuStyling';
import { RestaurantMenu } from '@material-ui/icons';
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';

import './Menu.css';

const Menu = () => {
  const allCategories = [
    ...new Set(foods.map((foodItem) => foodItem.category)),
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleClick = (category) => setSelectedCategory(category);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (food) => setShow(true);

  const [foodSelected, setFoodSelected] = useState(-1);

  const categoryButton = useRef([]);

  useEffect(() => {
    categoryButton.current[0].click();
  }, []);

  return (
    <MainContainer id='menu'>
      <StyledContainer className='container p-0' data-aos='fade-up'>
        <StyledSection>
          <SectionTitle>
            <RestaurantMenu /> Menu
          </SectionTitle>
          <SectionDesc style={{ paddingTop: '8.8px' }}>
            Check Our Tasty Menu
          </SectionDesc>
        </StyledSection>

        <Row>
          <Column className='col-lg-12 d-flex justify-content-center px-0 mb-4'>
            <ul>
              {allCategories.map((category, idx) => (
                <ListItem
                  key={idx}
                  ref={(el) => (categoryButton.current[idx] = el)}
                  onClick={() => handleClick(category)}
                  style={{
                    backgroundColor: selectedCategory === category && '#e60a08',
                  }}
                >
                  {category}
                </ListItem>
              ))}
            </ul>
          </Column>
        </Row>

        <Row>
          {foods
            .filter((food) => food.category === selectedCategory)
            .map((food) => (
              <Column className='col-sm-12 col-lg-6' key={food.id}>
                <FoodCard
                  food={food}
                  onClick={() => {
                    setFoodSelected(food.id);
                    handleShow();
                  }}
                />
              </Column>
            ))}
          <FoodModal
            foods={foods}
            foodSelected={foodSelected}
            show={show}
            onHide={() => {
              setFoodSelected(-1);
              handleClose();
            }}
          />
        </Row>
      </StyledContainer>
    </MainContainer>
  );
};

export default Menu;
