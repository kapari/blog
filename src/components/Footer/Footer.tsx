import * as React from 'react';
import styled from 'styled-components';
import Container from './../Layout/Container';
import Hidden from '../Layout/VisuallyHidden';
import theme from './../../utils/colors';
import bp from './../../utils/sizes';
import Social from '../Social/Social';
import ColorBar from './../Layout/ColorBar';

// const Accent = styled(ColorBar)`
//   flex: 1 0 100%;
//   height: 1rem;
// `;

const Element = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Content = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${bp.xs}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const Copyright = styled.p`
  margin-bottom: 0;
  color: ${theme.light.fg};
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
      <Content>
        <Copyright>&copy; Copyright {year} Ariel Kaplan</Copyright>
        <Hidden>Contact</Hidden>
        <Social />
      </Content>
      {/* <Accent /> */}
    </Element>
  );
};

export default Footer;
