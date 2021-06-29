import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './../Logo/Logo';
import Container from './../Layout/Container';
import theme from './../../utils/colors';
import { landing } from './../../utils/sizes';
import ColorBar from './../Layout/ColorBar';

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

const Content = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  @media (min-width: ${landing.split}) {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: scale(1) rotate(0deg);
  display: flex;
  flex: 0 0 auto;
  max-width: 60px;
  margin-left: -0.5rem;
  margin-right: 0.5rem;
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
  text-transform: uppercase;
  letter-spacing: 0.2em;
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
  const showNav = false
  return (
    <Element>
      <Accent />
      <Content>
        <LogoLink to="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Name>Ariel Kaplan</Name>
        </LogoLink>
        {showNav && <nav>
          <ul>
            {topLinks.map((item, key) => (
              <li key={key}>
                {item.url && (
                  <Link to={item.url}>
                    <span>{item.text}</span>
                  </Link>
                )}
                {/* {item.children && (
                  <Dropdown list={item.children}>{item.text}</Dropdown>
                )} */}
              </li>
            ))}
          </ul>
        </nav>}
      </Content>
    </Element>
  );
};

export default Header;
