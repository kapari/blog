import * as React from 'react';
import { Link } from 'gatsby';
import Dropdown from './Dropdown'
import {
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
      <h2>Site Title</h2>
      <nav>
        <ul className={nav__list}>
          {topLinks.map(item => (
            <li className={nav__item}>
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
