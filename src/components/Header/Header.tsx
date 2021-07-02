import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import NavLinks from './NavLinks';
import Logo from './../Logo/Logo';
import Container from './../Layout/Container';
import theme from './../../utils/colors';
import { breakpoints as bp } from './../../utils/sizes';
import ColorBar from './../Layout/ColorBar';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@material-ui/icons/Menu';

const Element = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: ${theme.light.bg};
`;

const Accent = styled(ColorBar)`
  height: 0.6rem;
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

const Brand = styled(Navbar.Brand)`
  margin-right: 0;
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
    box-shadow: none;
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
  line-height: 1.2;
  span {
    display: block;
    @media (min-width: ${bp.xs}) {
      display: inline;
    }
  }
`;

const Toggle = styled(Navbar.Toggle)`
  transition: color 0.25s ease-in-out;
  margin-right: -0.5rem;
  border: 0;
  cursor: pointer;
  && { // specificity override for bs
    box-shadow: none;
    color: ${theme.light.fgAlt};
    &:hover, 
    &:active,
    &:focus {
      color: ${theme.light.primary};
    }
  }
`;

const MenuIcon = styled(Menu)`
  max-width: 2rem;
  && {
    font-size: 2rem;
  }
`;

const Header: React.FC = () => {
  return (
    <Element>
      <Accent />
      <Content>
        <NavWrap bg="light" expand="md">
          <Brand>
            <LogoLink to="/">
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
              <Name>
                <span>Ariel</span> Kaplan
              </Name>
            </LogoLink>
          </Brand>
          <Toggle aria-controls="SiteNav">
            <MenuIcon />
          </Toggle>
          <CollapseNav id="SiteNav">
            <NavLinks />
          </CollapseNav>
        </NavWrap>
      </Content>
    </Element>
  );
};

export default Header;
