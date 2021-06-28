import * as React from 'react';
import styled from 'styled-components';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import theme from './../../utils/colors';
import { landing } from './../../utils/sizes';

const Element = styled.div<{ split: boolean }>`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  background-color: ${theme.light.bg};
  @media (min-width: ${landing.split}) {
    ${props => props.split &&
    'background-image: linear-gradient(90deg, rgba(237,242,227,1) 50%, rgba(57,58,65,1) 50%);'
  }
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

type Props = {
  readonly children?: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Element split>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Element>
  );
};

export default Layout;
