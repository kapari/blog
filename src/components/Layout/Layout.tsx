import * as React from 'react';
import styled from 'styled-components';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import theme from './../../utils/colors';
import Container from './Container';

const Element = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  background-color: ${theme.light.bg};
`;

const Main = styled.main<{ padded: boolean | undefined }>`
  flex: 1 1 auto;
  ${props => props.padded && `
    padding-top: 3rem;
    padding-bottom: 2rem;
  `}
`;

type Props = {
  readonly children?: React.ReactNode;
  landing?: boolean
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Element>
      <Header />
      <Main padded={!props.landing}>
        <Container full={props.landing}>
          {props.children}
        </Container>
      </Main>
      <Footer split={props.landing} />
    </Element>
  );
};

export default Layout;
