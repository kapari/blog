import * as React from 'react';
import styled from 'styled-components';
import Container from './../Layout/Container';
import Hidden from '../Layout/VisuallyHidden';
import theme from './../../utils/colors';
import bp from './../../utils/sizes';
import Social from '../Social/Social';
import ColorBar from './../Layout/ColorBar';

const Accent = styled(ColorBar)`
  height: 2rem;
`;

const Element = styled.footer`
  border-top: 1px solid ${theme.border};
  background-color: ${theme.bgAlt};
  padding-bottom: 1rem;
  text-align: center;
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  @media (min-width: ${bp.xs}) {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;

type Props = {
  children?: React.ReactNode;
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
      <Accent />
      <Content>
        <Hidden>Contact</Hidden>
        <Social />
      </Content>
      <p>&copy; Copyright {year} Ariel Kaplan</p>
    </Element>
  );
};

export default Footer;
