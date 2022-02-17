import { Row } from 'react-bootstrap';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { DinnerDiningOutlined } from '@mui/icons-material';
import { EmojiEmotionsOutlined } from '@material-ui/icons';
import { StyledCol, FeatureTitle, FeatureDesc, Phone } from './AboutStyling';
import { about, contactInfo } from '../../data';

const Feature = () => {
  const column = 'col-12 col-lg-4 col-md-4 mx-0 mb-md-0 py-1';
  return (
    <Row className='px-1'>
      {about.features.map((feature, idx) => (
        <StyledCol
          className={column}
          data-aos='zoom-in'
          data-aos-delay='150'
          key={feature.title}
        >
          {idx === 0 && <DinnerDiningOutlined style={{ fontSize: '2.5rem' }} />}
          {idx === 1 && (
            <EmojiEmotionsOutlined style={{ fontSize: '2.5rem' }} />
          )}
          {idx === 2 && (
            <MdOutlineDeliveryDining style={{ fontSize: '2.5rem' }} />
          )}
          <FeatureTitle className='text-uppercase'>
            {feature.title}
          </FeatureTitle>
          {idx === 2 ? (
            <FeatureDesc>
              Fantuan Delivery app or Call Us at{' '}
              <Phone href={`tel:${contactInfo.phone}`}>
                {contactInfo.phone}{' '}
              </Phone>
            </FeatureDesc>
          ) : (
            <FeatureDesc>{feature.desc}</FeatureDesc>
          )}
        </StyledCol>
      ))}
    </Row>
  );
};

export default Feature;
