import styled, {css} from "styled-components";

export const MainProgressContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `;
});

export const CirclesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 60%;
`;

export const StyledH4 = styled.h5(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        text-align: start;
    `;
});