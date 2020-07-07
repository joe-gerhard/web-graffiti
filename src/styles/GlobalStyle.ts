import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    html {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;