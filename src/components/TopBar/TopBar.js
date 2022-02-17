import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { WatchLaterOutlined } from '@material-ui/icons';
import { PhoneOutlined } from '@mui/icons-material';

import { contactInfo } from '../../data';
import { TopBarContainer, Info, Phone } from './TopBarStyling';

const TopBar = () => {
  const iconStyle = { fontSize: '18px', fill: '#ff1f40', marginRight: '5px' };

  const [hideTopBar, setHideTopBar] = useState(false);
  const changeTopBar = () => {
    if (window.scrollY >= 80) {
      setHideTopBar(true);
    } else {
      setHideTopBar(false);
    }
  };
  window.addEventListener('scroll', changeTopBar);

  const current = new Date();
  const today = current.toString().slice(0, 3);

  return (
    <TopBarContainer
      className={
        'd-flex align-items-center fixed-top p-0 ' +
        (hideTopBar ? 'adjustTopBar' : '')
      }
    >
      <Container className='d-flex justify-content-center justify-content-lg-between'>
        <div className='d-flex align-items-center'>
          <Info className='d-flex align-items-center'>
            <PhoneOutlined style={iconStyle} />
            <Phone href={`tel:${contactInfo.phone}`}>(613) 766-3368</Phone>
          </Info>
          <Info className='d-flex align-items-center ms-4'>
            <WatchLaterOutlined style={iconStyle} />{' '}
            {today === 'Sat' || today === 'Sun'
              ? 'Today: 12 p.m - 8 p.m'
              : 'Today: 11 a.m - 8 p.m'}
          </Info>
        </div>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;
