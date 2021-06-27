import * as React from 'react';
import styled from 'styled-components';
import bp from './../../utils/sizes';
import theme from './../../utils/colors';
import Social from '../Social/Social';
import Container from '../Layout/Container';

const Element = styled.section`
  margin-bottom: 3rem;
  background-color: ${theme.light.bgAlt};
  padding-top: 2rem;
  padding-bottom: 1rem;
  text-align: center;
  @media (min-width: ${bp.sm}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2rem;
  @media (min-width: ${bp.sm}) {
    font-size: 4rem;
  }
`;

type Props = {
  children?: React.ReactNode;
};

const LandingHero: React.FC<Props> = (props: Props) => {
  return (
    <Element>
      <Container>
        <Title>Hello!</Title>
        <p>I dance and create websites in the Portland, Oregon area.</p>
        <Social />
        {/* <p>I create websites and applications that are pleasant to look at, easy to use, and accessible for everyone.</p>
        <p>I help people to be more present in their own bodies, so they can connect more deeply and confidently with others.</p>
        <p>What are you looking for?</p> */}
      </Container>
    </Element>
  );
};

export default LandingHero;
