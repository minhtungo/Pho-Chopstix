import styled from 'styled-components';
import { Facebook, Instagram } from '@material-ui/icons';

export const Footer = styled.footer`
  background-image: linear-gradient(315deg, #000000 0%, #0d0d0d 74%);
  padding-top: 30px;
`;
export const SocialMedia = styled.section``;
export const SocialDesc = styled.h4`
  font-size: 1.1rem;
  font-weight: normal;
  margin-bottom: 0;
  line-height: 32px;
`;
export const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
`;

export const StyledFacebook = styled(Facebook)`
  &:hover {
    fill: #3b5999;
  }
`;

export const StyledInstagram = styled(Instagram)`
  &:hover {
    fill: #e4405f;
  }
`;

export const List = styled.ul`
  align-items: center;
`;
export const ListItem = styled.li`
  font-weight: 300;
  margin-bottom: 5px;
  list-style: none;
  font-size: 0.95rem;
`;
export const ContactItem = styled.div`
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;
export const Number = styled.a`
  display: block;
  font-size: 0.95rem;
  font-weight: 300;
  text-decoration: none;
  color: #d9d9d9;
  &:hover {
    color: white;
  }
`;
export const Days = styled.span`
  font-size: 0.95rem;
  font-weight: 500;

@media (max-width: 1264px) {
  display: block;
}
`;

export const CopyRight = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  color: #bfbfbf;
  padding: 12px;
  font-size: 0.8rem;
`;
export const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;
