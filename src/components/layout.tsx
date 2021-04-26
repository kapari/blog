import * as React from 'react';
import Header from './Header';
import { el } from './Layout.module.scss';

type Props = {
  readonly children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={el}>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
