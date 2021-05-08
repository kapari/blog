import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { el } from './Layout.module.scss';

type Props = {
  readonly children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={el}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
