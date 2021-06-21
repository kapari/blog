import * as React from 'react';
import styled from 'styled-components';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Element = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

type Props = {
  readonly children?: React.ReactNode;
  full?: boolean;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Element>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Element>
  );
};

export default Layout;
