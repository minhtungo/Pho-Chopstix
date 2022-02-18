// import './Phone.css';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
// width: 30px !important;
// height: 30px !important;
//   position: fixed;
//   top: 50%;
//   left: 80%;
//   z-index: 10;
//   cursor: pointer;
//   @media (max-width: 768px) {
//     left: 87%;
//   }
// `;

// const Phone = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     if (scrolled > 300) {
//       setVisible(true);
//     } else if (scrolled <= 300) {
//       setVisible(false);
//     }
//   };

//   window.addEventListener('scroll', toggleVisible);

//   return (
//     <Wrapper
//       style={{
//         display: !visible && 'none',
//       }}
//     >
//       <div className='ring'>
//         <div className='coccoc-alo-phone coccoc-alo-green coccoc-alo-show'>
//           <div className='coccoc-alo-ph-circle'></div>
//           <div className='coccoc-alo-ph-circle-fill'></div>
//           <div className='coccoc-alo-ph-img-circle'></div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Phone;
