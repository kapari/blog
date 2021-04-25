import * as React from 'react';
import Header from './Header';
import * as styles from './Layout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header className={styles.layout} />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
