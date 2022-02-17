import {
  SocialMedia,
  SocialDesc,
  SocialIcon,
  StyledFacebook,
  StyledInstagram,
} from './FooterStyling';

import { contactInfo } from '../../data';

const Social = () => {
  return (
    <SocialMedia className='d-flex justify-content-center p-4 border-bottom'>
      <div
        class='me-4 d-none d-lg-block'
        data-aos='fade-up'
        data-aos-delay='50'
      >
        <SocialDesc>Get connected with us on social networks:</SocialDesc>
      </div>
      <div>
        <SocialIcon href={contactInfo.facebook} target='_blank'>
          <StyledFacebook className='mx-2 text-reset' />
        </SocialIcon>
        <SocialIcon href={contactInfo.instagram} target='_blank'>
          <StyledInstagram className='mx-2 text-reset' />
        </SocialIcon>
      </div>
    </SocialMedia>
  );
};

export default Social;
