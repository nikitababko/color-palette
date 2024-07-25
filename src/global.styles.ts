import {css} from "@linaria/core";

export const globals = css`
  :global() {
    @import '@nikitababko/reset-css';

    @font-face {
      font-family: 'Roboto';
      src: url('./assets/fonts/Roboto-Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
      font-style: normal;
    }

    *,
    *:before,
    *:after {
      font-family: 'Roboto', sans-serif;
    }
  }
`;
