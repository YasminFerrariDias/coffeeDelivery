import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background: ${(props) => props.theme['background']};
  }

  .title-xl { 
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem; /* 48px */
    line-height: 130%;
    font-weight: 800;
  }

  .title-l {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem; /* 32px */
    line-height: 130%;
    font-weight: 800;
  }

  .title-m {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem; /* 24px */
    line-height: 130%;
    font-weight: 800;
  }

  .title-s {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem; /* 20px */
    line-height: 130%;
    font-weight: 700;
  }

  .title-xs {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem; /* 18px */
    line-height: 130%;
    font-weight: 700;
  }

  .text-l {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem; /* 20px */
    line-height: 130%;
    font-weight: 400;
  }

  .text-l-bold {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem; /* 20px */
    line-height: 130%;
    font-weight: 700;
  }

  .text-m {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem; /* 16px */
    line-height: 130%;
    font-weight: 400;
  }

  .text-m-bold {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem; /* 16px */
    line-height: 130%;
    font-weight: 700;
  }

  .text-s {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem; /* 14px */
    line-height: 130%;
    font-weight: 400;
  }

  .text-xs {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem; /* 12px */
    line-height: 130%;
    font-weight: 700;
  }

  .tag {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem; /* 10px */
    line-height: 130%;
    font-weight: 700;
  }

  .button-g {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem; /* 14px */
    line-height: 160%;
    font-weight: 700;
  }

  .button-s {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem; /* 12px */
    line-height: 160%;
    font-weight: 400;
  }
`
