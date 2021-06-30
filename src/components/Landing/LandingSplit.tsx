import * as React from 'react';
import styled from 'styled-components';
import { landing } from './../../utils/sizes';
import theme from './../../utils/colors';

const Element = styled.div`
  width: 100%;
  @media (min-width: ${landing.split}) {
    display: flex;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(
        90deg, 
        ${theme.light.bg} 50%, 
        ${theme.dark.bg} 50%
      );
    }
  }
`;

const Column = styled.div`
  @media (min-width: ${landing.split}) {
    flex: 1 1 50%;
  }
`;

type Props = {
  children?: React.ReactNode
  left: React.ReactChild
  right: React.ReactChild
};

const LandingSection: React.FC<Props> = (props: Props) => {
  return (
    <Element>
      <Column>
        {props.left}
      </Column>
      <Column>
        {props.right}
      </Column>
    </Element>
  );
};

export default LandingSection;
