import { createGlobalStyle } from "styled-components";
import { reset } from "./reset.styles";

export default createGlobalStyle`
    ${reset}
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend', sans-serif;
    }
`;