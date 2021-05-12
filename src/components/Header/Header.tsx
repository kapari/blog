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

type Props = {
  children?: React.ReactNode
};

const danceLinks = [
  {
    url: '/dance/event-calendar',
    text: 'Event Calendar'
  },
  {
    url: '/dance/practice-playlists',
    text: 'Practice Playlists'
  }
]

const topLinks = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/blog/',
    text: 'Blog'
  },
  {
    text: 'Dance',
    children: danceLinks
  }
]

const Header: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {

  return (
    <header>
      <div className={header__brand}>
        <span className={header__logo}>
          <Logo />
        </span>
        <h2 className={header__name}>
          Ariel Kaplan
        </h2>
      </div>
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
