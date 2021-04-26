import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
  children?: React.ReactNode
};
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
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
