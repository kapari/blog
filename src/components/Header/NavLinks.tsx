import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from './../../utils/colors';
import bp from './../../utils/sizes';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
    text: 'CSS Art'
  },
  {
    url: '/about/',
    text: 'About'
  }
];

const linkStyles = `
  transition: color 0.25s ease-in-out;
  background-color: ${theme.light.bg};
  padding: 0.5rem 1rem;
  color: ${theme.light.fgAlt};
  letter-spacing: 0.1em;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    box-shadow: none;
    background-color: ${theme.light.bg};
    color: ${theme.light.primary};
  }
`;

const Element = styled(Nav)`
  @media (min-width: ${bp.sm}) {
    align-items: center;
  }
  .nav-link.nav-link { // specificity for bs
    ${linkStyles}
  }
  .nav-link + .dropdown-menu {
    @media (min-width: ${bp.sm}) {
      transform: translateY(15px);
    }
  }
  .dropdown-menu {
    border-top: 1px solid ${theme.light.bgAltStrong};
    border-bottom: 1px solid ${theme.light.bgAltStrong};
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    background-color: ${theme.light.bg};
    @media (min-width: ${bp.sm}) {
      box-shadow: 0 0 6px ${theme.light.shadow};
      border-top: 0;
      border-bottom: 0;
      padding-top: 0;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -6px;
      left: 0;
      right: 0;
      height: 10px;
      background-color: ${theme.light.bg};
    }
  }
`;

const NavLink = styled(Nav.Link)`
  ${linkStyles}
`;

const NestedLink = styled(Link)`
  ${linkStyles}
`;

const NavLinks: React.FC = () => {
  return (
    <Element>
      {topLinks.map((item) => (
        item.url ? (
          <NavLink to={item.url || '/'} as={Link} key={item.text}>
            {item.text}
          </NavLink>
        ) : (
          <NavDropdown title={item.text} id={item.text.toString()}>
            {item.children?.map((item, key) => (
              <NavDropdown.Item
                as={NestedLink}
                to={item.url}
                key={key.toString()}
              >
                {item.text}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        )
      ))}
    </Element>
  );
};

export default NavLinks;
