import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './../Logo/Logo';
import Container from './../Layout/Container';
import theme from './../../utils/colors';
import { breakpoints as bp } from './../../utils/sizes';
import ColorBar from './../Layout/ColorBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Element = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${theme.light.bg};
`;

const Accent = styled(ColorBar)`
  height: 0.6rem;
  border-bottom: 1px solid ${theme.light.bgAlt};
`

const Content = styled(Container)``;

const CollapseNav = styled(Navbar.Collapse)`
  flex: 1 1 100%;
  @media (min-width: ${bp.sm}) {
    flex: 0 0 auto;
  }
`;

const NavWrap = styled(Navbar)`
  background-color: transparent !important; // override bs
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: ${bp.sm}) {
    flex-wrap: nowrap;
  } 
`;

const LogoWrapper = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: scale(1) rotate(0deg);
  display: flex;
  flex: 0 0 auto;
  max-width: 60px;
  max-height: 60px; // safari
  margin-left: -1rem;
`;

const LogoLink = styled(Link)`
  transition: color 0.25s ease-in-out;
  display: flex;
  align-items: center;
  color: ${theme.light.fg};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    color: ${theme.light.primary};
    ${LogoWrapper} {
      transform: scale(1.1) rotate(-3deg);
    }
  }
`;

const Name = styled.span`
  flex: 1 1 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;

const Toggle = styled(Navbar.Toggle)`
  border-radius: 50%;
  && { // specificity override for bs
    color: ${theme.light.fgAlt};
    box-shadow: 0 0 0 .2rem transparent;
    &:hover, 
    &:active,
    &:focus {
      box-shadow: 0 0 0 .2rem ${theme.light.bgAltStrong};
    }
  }
`;

const danceLinks = [
  {
    url: '/dance/event-calendar',
    text: 'Event Calendar'
  },
  {
    url: '/dance/classes',
    text: 'Class Offerings'
  },
  {
    url: '/dance/practice-playlists',
    text: 'Practice Playlists'
  }
];

const topLinks = [
  {
    text: 'Dance',
    children: danceLinks
  },
  {
    url: '/tech/css-art',
    text: 'Tech'
  },
  {
    url: '/about/',
    text: 'About'
  }
];

const Header: React.FC = () => {
  return (
    <Element>
      <Accent />
      <Content>
        <NavWrap bg="light" expand="md">
          <Navbar.Brand>
            <LogoLink to="/">
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <Name>Ariel Kaplan</Name>
            </LogoLink>
          </Navbar.Brand>
          <Toggle aria-controls="SiteNav" />
          <CollapseNav id="SiteNav">
            <Nav>
              {topLinks.map((item, key) => (
                item.url ? (
                  <Nav.Link to={item.url || '/'} as={Link} key={key}>
                    {item.text}
                  </Nav.Link>
                ) : (
                  <NavDropdown title={item.text} id={key.toString()}>
                    {item.children?.map((item, key) => (
                      <NavDropdown.Item
                        as={Link}
                        to={item.url}
                        key={key.toString()}
                      >
                        {item.text}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )
              ))}
            </Nav>
          </CollapseNav>
        </NavWrap>
      </Content>
    </Element>
  );
};

export default Header;
