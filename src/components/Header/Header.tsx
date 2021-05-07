import * as React from 'react';
import { Link } from 'gatsby';
import Dropdown from './Dropdown'

type Props = {
  children?: React.ReactNode
};

const links = [
  {
    url: '/dance/event-calendar',
    text: 'Event Calendar'
  },
  {
    url: '/dance/practice-playlists',
    text: 'Practice Playlists'
  }
]

const Header: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {

  return (
    <header>
      <h2>Site Title</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Dropdown list={links}>Dance</Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
