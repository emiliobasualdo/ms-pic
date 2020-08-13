import styled, {css, keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const ColumnDataContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem 1rem 1rem 1rem;
        font-family: ${theme.typography.fonts.secondary};
        width: auto;
        animation: ${fadeIn} .5s .2s ease-in backwards;
    `;
});

export const StyledDiv = styled.div`
    margin-top: 0.5rem;
`;

export const StyledP = styled.p(({theme}) => {
    return css `
        color: ${theme.colors['dark-grey']};
        font-family: ${theme.typography.fonts.secondary};
        font-size: 0.9rem;
    `;
});

export const StyledSpan = styled.span(({theme}) => {
    return css `
        color: ${theme.colors['dark-grey']};
        font-weight: ${theme.typography.weights.bold};
        font-family: ${theme.typography.fonts.secondary};
        font-size: 1.2rem;
    `;
});