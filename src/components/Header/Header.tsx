import * as React from 'react';
import { Link } from 'gatsby';
import Dropdown from './Dropdown';
import Logo from './../Logo/Logo';
import {
  el,
  content,
  brandLink,
  logo,
  name,
  navList,
  navItem,
  navLink
} from './Header.module.scss';

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
    <header className={el}>
      <div className={content}>
        <Link to="/" className={brandLink}>
          <span className={logo}>
            <Logo />
          </span>
          <span className={name}>Ariel Kaplan</span>
        </Link>
        <nav>
          <ul className={navList}>
            {topLinks.map((item, key) => (
              <li key={key} className={navItem}>
                {item.url && (
                  <Link to={item.url} className={navLink}>
                    <span>{item.text}</span>
                  </Link>
                )}
                {item.children && (
                  <Dropdown list={item.children}>{item.text}</Dropdown>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
