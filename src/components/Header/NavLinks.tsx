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
  // {
  //   url: '/about/',
  //   text: 'About'
  // }
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
  .dropdown-menu {
    border-color: ${theme.light.bgAlt};
    border-radius: 0;
    background-color: ${theme.light.bgAltStrong};  
    background-image: linear-gradient(
      120deg, 
      ${theme.light.bgAltStrong} 0%, 
      ${theme.light.primary} 100%
    );
    padding: 0.1rem;
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
      {topLinks.map((item, key) => (
        item.url ? (
          <NavLink to={item.url || '/'} as={Link} key={key}>
            {item.text}
          </NavLink>
        ) : (
          <NavDropdown title={item.text} id={key.toString()}>
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
