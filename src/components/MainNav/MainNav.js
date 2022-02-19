import { Navbar, Nav, Container } from 'react-bootstrap';

import { useState, useEffect } from 'react';

import { Menu } from '@material-ui/icons';
import { Header, StyledNavbar, Logo, NavLink, Button } from './MainNavStyling';
import { contactInfo } from '../../data';
import './MainNav.css';

const MainNav = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 768 ;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <Header
      className={
        'fixed-top d-flex align-items-center px-0 ' +
        (colorChange && 'adjustNavBar ') +
        (!isMobile && colorChange && 'colorChange')
      }
    >
      <Container fluid className='px-0'>
        <StyledNavbar collapseOnSelect expand='md'>
          <Container
            fluid={isMobile}
            className={colorChange && isMobile ? 'colorChange' : ''}
          >
            <Navbar.Brand href='#home'>
              <Logo
                href='#home'
                src={`${process.env.PUBLIC_URL}/assets/images/chopstix.png`}
                className='d-inline-block align-top'
                alt='Chopstix Logo'
              ></Logo>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls='responsive-navbar-nav'
              style={{ color: 'transparent' }}
            >
              <Menu style={{ height: '30px', width: '30px' }} />
            </Navbar.Toggle>
            <Navbar.Collapse
              id='responsive-navbar-nav'
              className={
                'justify-content-end ' +
                (isMobile && !colorChange && 'colorChange')
              }
            >
              <Nav className='align-items-center'>
                <NavLink href='#home'>Home</NavLink>
                <NavLink href='#about'>About</NavLink>
                <NavLink href='#menu'>Menu</NavLink>
                <NavLink href='#gallery'>Gallery</NavLink>
                <NavLink href='#contact'>Contact</NavLink>
                <Nav.Link href={`tel:${contactInfo.phone}`}>
                  <Button>Call Us</Button>{' '}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </Container>
    </Header>
  );
};

export default MainNav;
