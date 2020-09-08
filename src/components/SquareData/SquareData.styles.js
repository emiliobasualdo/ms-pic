import styled, {css, keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const SquareDataContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 22rem;
        padding: 1rem;
        width: 28%;
        animation: ${fadeIn} .5s .2s ease-in backwards;
    `;
});

export const StyledTitle = styled.div(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        color: ${theme.colors.darkGrey};
        font-size: 0.9rem;
        margin-left: 1rem;
    `;
});

export const SquareContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
`;

export const StyledDivContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
});

export const StyledHeaderSpan = styled.span(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        font-weight: ${theme.typography.weights.bold};
        font-size: 0.8rem;
    `;
});

export const StyledDiv = styled.div(({theme}) => {
    return css`
        padding: 0.5rem 1.4rem;
        text-align: start;
        border-top: 1px solid ${theme.colors.lightGrey};
        font-size: 0.9rem;
    `;
});