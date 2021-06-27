import styled from 'styled-components';
import theme from '../../utils/colors';

const ColorBar = styled.div`
  background-color: ${theme.light.bgAltStrong};  
  background-image: linear-gradient(
    120deg, 
    ${theme.light.bgAltStrong} 0%, 
    // ${theme.light.fgAlt} 57%, 
    // ${theme.light.fgAlt} 64%,
    rgba(80,119,124,1) 100%
  );
`;

export default ColorBar;
