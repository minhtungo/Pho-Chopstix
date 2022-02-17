import { Container } from 'react-bootstrap';
import {
  Footer,
  CopyRight,
  Map,
} from './FooterStyling';

import { contactInfo } from '../../data';
import Info from './Info';
import Social from './Social';

const Footers = () => {
  return (
    <Footer className='text-center text-white' id='contact'>
      <Container fluid className='pb-1' data-aos='fade-up' data-aos-delay='50'>
        <Social />
        <Info />
        <Map
          title='Pho Chopstix Location'
          src={contactInfo.mapUrl}
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          data-aos='zoom-in'
          data-aos-delay='150'
        ></Map>
      </Container>
      <CopyRight className='text-center'>
        © 2022 Copyright Pho Chopstix
      </CopyRight>
    </Footer>
  );
};

export default Footers;
