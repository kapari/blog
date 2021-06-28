import styled from 'styled-components';
import bp from '../../utils/sizes';

export const NoPadContainer = styled.div`
  max-width: ${bp.lg};
  @media (min-width: ${bp.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Container = styled(NoPadContainer)`
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: ${bp.xs}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export default Container;
