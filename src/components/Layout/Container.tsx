import styled from 'styled-components';
import bp from '../../utils/sizes';

export const Container = styled.div <{ full?: boolean | undefined }>`
  max-width: ${bp.lg};
  ${props => !props.full ? `
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: ${bp.xs}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  ` : null}
  @media (min-width: ${bp.lg}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Container;
