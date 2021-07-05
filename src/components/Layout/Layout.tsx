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

const SkipLink = styled.a`
  transition: transform 0.25s ease-in-out;
  position: absolute;
  z-index: 1;
  left: 5px;
  top: 5px;
  transform: translateX(calc(-100% - 10px));
  display: inline-block;
  border: 1px solid ${theme.dark.primary};
  background-color: ${theme.dark.bg};
  padding: 10px 15px;
  font-weight: bold;    
  color: ${theme.dark.fg};
  && {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }      
  &:focus,
  &:active {
    transform: translateX(0%);
  }
`;

type Props = {
  readonly children?: React.ReactNode;
  landing?: boolean
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Element>
      <Header>
        <SkipLink href="#main">
          Skip to Main Content
        </SkipLink>
      </Header>
      <Main padded={!props.landing}>
        <a id="main"></a>
        <Container full={props.landing}>
          {props.children}
        </Container>
      </Main>
      <Footer split={props.landing} />
    </Element>
  );
};

export default Layout;
