import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = styled.div`
  top: 40px;
  height: 55px;
  z-index: 997;
  transition: all 0.5s;
  padding: 10px 0;
  background: transparent;
`;

export const StyledNavbar = styled(Navbar)`
  height: 55px;
  padding: 0 !important;
`;

export const Logo = styled.img`
  height: 2.5rem;
`;

export const NavLink = styled(Nav.Link)`
  color: #d9d9d9 !important;
  margin-right: 18px;
  &:hover,
  &:active {
    color: #ff1f40 !important;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
  @media (max-width: 992px) {
    font-size: 16.5px;
  }
`;

export const Button = styled.a`
  font-size: 1rem !important;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  padding: 5px 18px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 0 10px;
  background: #e60a08;
  color: #d9d9d9;
  &:hover {
    background: #ac0906;
    color: #d9d9d9;
  }
  @media (max-width: 992px) {
    font-size: 16px !important;
    padding: 5px 9px;
  }
`;
