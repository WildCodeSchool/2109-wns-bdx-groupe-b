import { createGlobalStyle } from 'styled-components';


import AvertaRegular from './Averta-Regular.woff';
import AvertaRWoff2 from './Averta-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Averta';
        src: local('Averta'), local('Averta'),
        url(${AvertaRWoff2}) format('woff2'),
        url(${AvertaRegular}) format('woff');
        
    }
`;