import { Modal } from 'react-bootstrap';
import {
  ImageContainer,
  ModalImage,
  FoodCategory,
  FoodName,
  FoodDesc,
  InfoContainer,
  ItemRow,
  ItemName,
  ItemPrice,
  ItemSize,
} from './MenuStyling';

const FoodModal = ({ foods, onHide, show, foodSelected }) => {
  const food = foods.filter((food) => food.id === foodSelected);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      scrollable
      className='modal'
      dialogClassName='modal-container'
    >
      {food.map((food) => (
        <>
          <Modal.Header
            className='modal-header'
            closeLabel
            style={{ padding: '10px', border: 'none' }}
            closeButton
            closeVariant='white'
          >
            {food.img ? (
              <ImageContainer>
                <ModalImage src={food.img} alt={food.name} />
              </ImageContainer>
            ) : (
              <FoodCategory>{food.category}</FoodCategory>
            )}
          </Modal.Header>
          <Modal.Body className='modal-body' style={{ padding: '12px 25px' }}>
            <FoodName className='card-title' style={{ color: '#e60a08' }}>
              {food.id >= 30 ? food.name : `${food.id}. ${food.name}`}
            </FoodName>

            <FoodDesc>{food.desc}</FoodDesc>
            {food.choice ? (
              <InfoContainer className='d-flex flex-column'>
                {food.choice[0].size ? (
                  <>
                    {food.choice.map((item, id) => (
                      <li key={id}>
                        <ItemName>{item.name}</ItemName>
                        {item.size.map((i, idx) => (
                          <ItemRow className='d-flex justify-content-between'>
                            <ItemSize>{i}</ItemSize>
                            <ItemPrice>${item.price[idx]}</ItemPrice>
                          </ItemRow>
                        ))}
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {food.choice.map((item, id) => (
                      <li key={id}>
                        <ItemRow className='d-flex justify-content-between'>
                          <ItemName>{item.name}</ItemName>
                          <ItemPrice>${item.price}</ItemPrice>
                        </ItemRow>
                      </li>
                    ))}
                  </>
                )}
              </InfoContainer>
            ) : (
              <ItemPrice style={{ textAlign: 'right' }}>
                ${food.price}
              </ItemPrice>
            )}
          </Modal.Body>
        </>
      ))}
    </Modal>
  );
};

export default FoodModal;
