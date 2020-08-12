import styled, {css} from "styled-components";

export const LayoutContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.background};
        width: 100%;
        min-height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0;
    `;
});