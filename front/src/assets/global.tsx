import { createGlobalStyle } from 'styled-components';
import COLORS from './colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLORS.background};
    font-family: "Averta";
    color: ${COLORS.text}
  }
`;
 
export default GlobalStyle;