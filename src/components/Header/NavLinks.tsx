import * as React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby';
// import theme from './../../utils/colors';
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
    text: 'Tech'
  },
  {
    url: '/about/',
    text: 'About'
  }
];

const NavLinks: React.FC = () => {
  return (
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
  );
};

export default NavLinks;
