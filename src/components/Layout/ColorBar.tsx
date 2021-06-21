import styled from 'styled-components';
import theme from '../../utils/colors';

const ColorBar = styled.div`
  background-color: ${theme.bgAltStrong};  
  background-image: linear-gradient(
    120deg, 
    ${theme.bgAltStrong} 0%, 
    ${theme.fgAlt} 57%, 
    ${theme.fgAlt} 64%,
    rgba(80,119,124,1) 100%
  );
`;

export default ColorBar;
