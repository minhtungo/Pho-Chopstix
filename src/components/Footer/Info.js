import { AccessTimeOutlined, Phone, Room, Mail } from '@material-ui/icons';
import { Row } from 'react-bootstrap';

import '../../App.css';
import {
  List,
  ListItem,
  ContactItem,
  Number,
  Days,
} from './FooterStyling';

import { contactInfo } from '../../data';

const Info = () => {
  const column = 'col-md-6 col-lg-3 mx-auto mb-md-0 mb-4 text-sm-center';
  const contactIcon = 'mb-4 text-center fs-1';
  return (
    <Row className='my-4'>
      <div className={column} data-aos='zoom-in' data-aos-delay='120'>
        <AccessTimeOutlined
          style={{ fontSize: '2.2rem' }}
          className='mb-4 text-center'
        />
        <List className='ps-0'>
          {contactInfo.openingHours.map((opening) => (
            <ListItem>
              <Days>{opening.days}</Days> {opening.hours}
            </ListItem>
          ))}
        </List>
      </div>
      <div className={column} data-aos='zoom-in' data-aos-delay='120'>
        <Room className={contactIcon} />
        <ContactItem>{contactInfo.address}</ContactItem>
      </div>
      <div className={column} data-aos='zoom-in' data-aos-delay='120'>
        <Phone className={contactIcon} />
        <Number href={`tel:${contactInfo.phone}`}> {contactInfo.phone}</Number>
      </div>
      <div className={column} data-aos='zoom-in' data-aos-delay='120'>
        <Mail className={contactIcon} />
        <Number href='mailto:phochopstix@gmail.com'>{contactInfo.email}</Number>
      </div>
    </Row>
  );
};

export default Info;
