import * as React from 'react';
import styled from 'styled-components';
import bp from './../../utils/sizes';
import Container from '../Layout/Container';

const Element = styled(Container)`
  width: 100%;
  padding-top: 100px;
  @media (min-width: ${bp.sm}) {
    display: flex;
  }
`;

const Column = styled.div`
  @media (min-width: ${bp.sm}) {
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
