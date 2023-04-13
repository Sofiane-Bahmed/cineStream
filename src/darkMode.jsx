import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';



 export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;

 export const lightTheme = {
  body: '#fff',
  text: '#363537',
  
};

 export const darkTheme = {
  body: '#212426',
  text: '#FAFAFA',
};