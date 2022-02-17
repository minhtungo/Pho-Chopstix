import { Container, Row, Col } from 'react-bootstrap';
import { StyledSection, SectionTitle } from '../SectionStyling';
import {InfoOutlined } from '@material-ui/icons';
import {
  FeatureContainer,
  Image,
  Title,
  Desc,
} from './AboutStyling';
import { about } from '../../data';
import Feature from './Feature'

const About = () => {

  return (
    <FeatureContainer fluid id='about'>
      <Container data-aos='fade-up'>
        <StyledSection>
          <SectionTitle>
            <InfoOutlined /> About Us
          </SectionTitle>
        </StyledSection>
        <Row>
          <Col
            className='col-12 col-lg-4 mx-auto mb-md-0 mb-1 py-2'
            data-aos='zoom-in'
          >
            <Image
              src={`${process.env.PUBLIC_URL}/assets/images//pho_ribs.png`}
            />
          </Col>
          <Col className='col-12 col-lg-8 mx-auto mb-md-0 py-3 text-start d-flex flex-column justify-content-between'>
            <Row>
              <Title>{about.title}</Title>
              <Desc>{about.desc}</Desc>
            </Row>
            <Feature />
          </Col>
        </Row>
      </Container>
    </FeatureContainer>
  );
};

export default About;
