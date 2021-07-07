import styled from 'styled-components';
import theme from '../../utils/colors';

const ColorBar = styled.div`
  background-color: ${theme.light.bgAltStrong};  
  background-image: ${theme.light.gradient};
`;

export default ColorBar;
