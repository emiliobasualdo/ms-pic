import styled, {css} from "styled-components";

export const BarGraphContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem;
        width: 20%;
        height: 3.5rem;
        background-color: ${theme.colors.white};
    `;
});

export const StyledH3 = styled.h3(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        color: ${theme.colors.darkGrey};
    `;
});

export const StyledP = styled.p(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        color: ${theme.colors.darkGrey};
    `;
});