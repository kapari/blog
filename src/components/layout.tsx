import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { el, main, contained } from './Layout.module.scss';

type Props = {
  readonly children?: React.ReactNode;
  full?: boolean
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <div className={el}>
      <Header />
      <main className={`${main} ${props.full ? contained : null}`}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
