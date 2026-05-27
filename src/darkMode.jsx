import { createGlobalStyle } from 'styled-components';



 export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .search {
    background: ${({ theme }) => theme.searchBg} !important;
    box-shadow: ${({ theme }) => theme.searchShadow} !important;
  }

  .search input {
    background: ${({ theme }) => theme.searchBg} !important;
    color: ${({ theme }) => theme.inputText} !important;
  }

  nav {
    background-color: ${({ theme }) => theme.navBg} !important;
  }

  h1 {
    background: ${({ theme }) => theme.h1Gradient} !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }

  .movie div:nth-of-type(3) {
    background-color: ${({ theme }) => theme.movieCardBg} !important;
  }

  .movie div:nth-of-type(3) h3 {
    color: ${({ theme }) => theme.movieTitle} !important;
  }

  .empty h2 {
    color: ${({ theme }) => theme.movieTitle} !important;
  }
`;

 export const lightTheme = {
  body: '#f0f2f5',
  text: '#363537',
  navBg: '#ffffff',
  searchBg: '#ffffff',
  searchShadow: '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
  inputText: '#333',
  h1Gradient: 'linear-gradient(90deg, #ff8a00 0%, #e52e71 100%)',
  movieCardBg: '#ffffff',
  movieTitle: '#ff8a00',
  footerBg: '#f9d3b4',
  footerText: '#333'
};

 export const darkTheme = {
  body: '#212426',
  text: '#FAFAFA',
  navBg: '#1f2123',
  searchBg: '#1f2123',
  searchShadow: '5px 5px 7px #1c1d1f, -5px -5px 7px #222527',
  inputText: '#a1a1a1',
  h1Gradient: 'linear-gradient(90deg, #f9d3b4 0%, #ff8a00 100%)',
  movieCardBg: '#343739',
  movieTitle: '#f9d3b4',
  footerBg: '#1a1c1e',
  footerText: '#FAFAFA'
};