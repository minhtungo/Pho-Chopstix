import { ArrowForwardIosOutlined } from '@material-ui/icons';

import {
  Card,
  ImageContainer,
  Content,
  FoodName,
  FoodDesc,
  Price,
} from './MenuStyling';

const FoodCard = ({ food, onClick }) => {
  const foodImage = food.img && (
    <ImageContainer>
      <img src={food.img} alt={food.name} />
    </ImageContainer>
  );
  const foodName = food.id >= 30 ? food.name : `${food.id}. ${food.name}`;
  const foodPrice = !food.choice ? (
    `$${food.price}`
  ) : (
    <ArrowForwardIosOutlined style={{ fontSize: '17px' }} />
  );

  return (
    <Card
      className='food-card--vertical animate__animated animate__fadeInUp animate__duration-2s'
      onClick={onClick}
    >
      {foodImage}
      <Content className='card-body text-start d-flex flex-column'>
        <FoodName className='card-title'>{foodName}</FoodName>
        <FoodDesc>{food.desc}</FoodDesc>
        <Price className='mt-auto mb-0'>{foodPrice}</Price>
      </Content>
    </Card>
  );
};

export default FoodCard;
