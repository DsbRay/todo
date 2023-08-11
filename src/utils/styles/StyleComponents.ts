// src/components/StyledComponent.js
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Josefin Sans';
    margin: 0;
    padding: 0;
    main {
      height: 100vh;
    }
  }
  
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;

export { GlobalStyle, Button };
