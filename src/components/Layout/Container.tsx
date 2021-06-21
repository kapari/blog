import styled from 'styled-components';
import bp from '../../utils/sizes';

const Container = styled.div`
  max-width: ${bp.lg};
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: ${bp.xs}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: ${bp.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Container;
