import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Dropdown from './Dropdown';
import Logo from './../Logo/Logo';
import Container from './../Layout/Container';
import theme from './../../utils/colors';
import bp from './../../utils/sizes';
import ColorBar from './../Layout/ColorBar';

const Accent = styled(ColorBar)`
  height: 20px;
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  @media (min-width: ${bp.xs}) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;

const LogoLink = styled(Link)`
  transition: color 0.25s ease-in-out;
  display: flex;
  align-items: center;
  color: ${theme.fg};
  &:hover,
  &:focus,
  &:active {
    color: ${theme.primary};
  }
`;

const LogoWrapper = styled.span`
  display: flex;
  flex: 0 0 auto;
  max-width: 40px;
  margin-left: -0.5rem;
  @media (min-width: ${bp.xs}) {
    max-width: 60px;
  }
`;

const Name = styled.span`
  flex: 1 1 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  @media (min-width: ${bp.xs}) {
    font-size: 1rem;
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
  const showNav = false
  return (
    <header>
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
                {item.children && (
                  <Dropdown list={item.children}>{item.text}</Dropdown>
                )}
              </li>
            ))}
          </ul>
        </nav>}
      </Content>
    </header>
  );
};

export default Header;
