// import styled from 'styled-components';
// import { useState, useEffect } from 'react';
// import '../App.css';
// import { Modal } from 'react-bootstrap';
// import { contactInfo } from '../../data';
// const Red = styled.span`
//   color: rgb(255, 31, 64);
// `;

// const Phone = styled.a`
//   color: rgb(255, 31, 64);
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     color: #e60a08;
//   }
// `;

// const Body = styled(Modal.Body)`
//   text-align: center;
//   font-size: 1rem;
//   padding: 12px 25px;
//   color: #f2f2f2;
//   background-color: black;
//   @media (min-width: 768px) {
//     font-size: 1.1rem;
//   }
// `;

// const ImageContainer = styled.div`
//   display: block;
//   position: relative;
//   background-color: black;
//   text-align: center;
// `;

// const ModalImage = styled.img`
//   width: 200px;

//   @media (max-width: 768px) {
//     height: 210px;
//   }
// `;

// const Discount = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   useEffect(() => {
//     handleShow();
//   }, []);

//   return (
//     <Modal
//       show={show}
//       onHide={handleClose}
//       centered
//       scrollable
//       className='modal'
//       dialogClassName='modal-container'
//     >
//       <Modal.Header
//         className='modal-header'
//         closeLabel
//         style={{ padding: '10px', border: 'none' }}
//         closeButton
//         closeVariant='white'
//       >
//         <ImageContainer>
//           <ModalImage src='/assets/images/welcome.gif' alt='welcome gif' />
//         </ImageContainer>
//         <Modal.Title
//           className='d-flex align-items-center justify-content-center'
//           style={{
//             textAlign: 'center',
//             margin: '0 auto',
//             color: 'rgb(255, 31, 64)',
//             backgroundColor: 'black',
//             fontSize: '18px',
//           }}
//         >
//           GRAND OPENING JAN 31TH 15% OFF
//           <img
//             src='/assets/images/firework.gif'
//             style={{ width: '30px', marginLeft: '6px' }}
//             alt='firework gif'
//           />
//         </Modal.Title>
//       </Modal.Header>
//       <Body className='modal-body'>
//         Come and celebrate with us for a{' '}
//         <Red style={{ fontSize: '1.1rem' }}>Free Vietnamese Iced Coffee</Red> (1
//         day only).
//       </Body>
//       <Modal.Footer
//         className='modal-body'
//         style={{
//           padding: '12px 25px',
//           color: 'white',
//           backgroundColor: 'black',
//           textAlign: 'center',
//         }}
//       >
//         <p style={{ fontSize: '0.8rem', margin: 0 }}>
//           <Red style={{ fontSize: '0.8rem' }}>15% OFF</Red> event lasts until
//           Feb 6th. For reservation call us at{' '}
//           <Phone
//             style={{ fontSize: '0.8rem' }}
//             href={`tel:${contactInfo.phone}`}
//           >
//             (613) 766-3368
//           </Phone>
//           {''}.
//         </p>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default Discount;
