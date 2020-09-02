import styled, {css} from "styled-components";

export const RechargesQuantityContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        height: 100%;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `;
});