import { Modal } from 'react-bootstrap';
import {
  ImageContainer,
  ModalImage,
  FoodCategory,
  FoodModalName,
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
      size='lg'
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
            <FoodModalName
              className='card-title'
              style={{ color: '#e60a08', padding: '12px 25px 0 25px' }}
            >
              {food.id >= 30 ? food.name : `${food.id}. ${food.name}`}
            </FoodModalName>
          </Modal.Header>
          <Modal.Body className='modal-body'>
            <FoodDesc>{food.desc}</FoodDesc>
            {food.choice ? (
              <InfoContainer className='d-flex flex-column'>
                {food.choice[0].size ? (
                  <>
                    {food.choice.map((item, id) => (
                      <li key={id}>
                        <ItemName className='text-center'>{item.name}</ItemName>
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
                          {item.price && <ItemPrice>${item.price}</ItemPrice>}
                        </ItemRow>
                      </li>
                    ))}
                    {food.price && (
                      <ItemPrice style={{ textAlign: 'right' }}>
                        ${food.price}
                      </ItemPrice>
                    )}
                  </>
                )}
              </InfoContainer>
            ) : (
              <ItemPrice style={{ textAlign: 'right' }}>
                ${food.price}
              </ItemPrice>
            )}
          </Modal.Body>
          {food.note && (
            <Modal.Footer className='modal-body'>{food.note}</Modal.Footer>
          )}
        </>
      ))}
    </Modal>
  );
};

export default FoodModal;
