import * as React from 'react';
import { Link } from 'gatsby';
import Dropdown from './Dropdown'
import Logo from './../Logo/Logo'
import {
  header__brand,
  header__logo,
  header__name,
  nav__list,
  nav__item,
  nav__link
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
]

const techLinks = [
  {
    url: '/tech/css-art',
    text: 'CSS Art'
  }
]

const topLinks = [
  {
    url: '/blog/',
    text: 'Blog'
  },
  {
    text: 'Dance',
    children: danceLinks
  },
  {
    text: 'Tech',
    children: techLinks
  }
]

const Header: React.FC = () => {

  return (
    <header>
      <Link to="/" className={header__brand}>
        <span className={header__logo}>
          <Logo />
        </span>
        <span className={header__name}>
          Ariel Kaplan
        </span>
      </Link>
      <nav>
        <ul className={nav__list}>
          {topLinks.map(item => (
            <li className={nav__item} key={item.url}>
              {item.url && (
                <Link to={item.url} className={nav__link}>
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
    </header>
  );
};

export default Header;
