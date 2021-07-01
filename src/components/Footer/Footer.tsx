import * as React from 'react';
import styled from 'styled-components';
import Container from './../Layout/Container';
import Hidden from '../Layout/VisuallyHidden';
import theme from './../../utils/colors';
import { landing } from './../../utils/sizes';
import Social from './Social';

const Element = styled.footer`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${theme.light.fgAlt};
`;

const Content = styled(Container)`
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: ${landing.split}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p<{ split?: boolean | undefined }>`
  margin-bottom: 0;
  font-size: 0.8rem;
  ${props => props.split &&
    `@media (min-width: ${landing.split}) {
      color: ${theme.dark.fgAlt};
    }`
  }
`;

type Props = {
  children?: React.ReactNode;
  split?: boolean
};

const Footer: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (
  props: Props
) => {
  let year = new Date().getFullYear().toString();
  if (year !== '2021') {
    year = `2021-${year}`;
  }

  return (
    <Element>
      <Content>
        <Hidden>Contact</Hidden>
        <Social />
        <Copyright split={props.split}>&copy; {year} Ariel Kaplan</Copyright>
      </Content>
    </Element>
  );
};

export default Footer;
