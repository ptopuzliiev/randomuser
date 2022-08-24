import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.App {
  height: 100vh;
}

main {
  padding-bottom: 32px;
}

img {
    max-width: 100%;
}

ul, li {
  padding: 0;
  list-style-type: none;
}

dl,
dt,
dd {
  margin: 0;
}

a:hover {
  text-decoration: none;
}

.mr-1{
  margin-right: 5px;
}
`;

export default GlobalStyles;
