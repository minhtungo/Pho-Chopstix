import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 40px;
  transition: all 0.5s;
  background: transparent;
  z-index: 996;
  color: rgba(255, 255, 255, 0.7);
`;

export const Info = styled.span`
  line-height: 0;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Phone = styled.a`
  line-height: 0;
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: rgb(255, 31, 64);
  }
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
