import * as React from 'react';
import styled from 'styled-components';
import { breakpoints as bp, landing } from './../../utils/sizes';
import { NoPadContainer } from '../Layout/Container';

const Element = styled(NoPadContainer)`
  width: 100%;
  padding-top: 70px;
  @media (min-width: ${bp.sm}) {
    padding-top: 100px;
  }
  @media (min-width: ${landing.split}) {
    display: flex;
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
