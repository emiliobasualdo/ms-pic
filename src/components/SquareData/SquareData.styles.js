import styled, {css} from "styled-components";

export const SquareDataContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 22rem;
        padding: 1rem;
    `;
});

export const StyledTitle = styled.div(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        color: ${theme.colors['dark-grey']};
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
        border-top: 1px solid ${theme.colors['light-grey']};
        font-size: 0.9rem;
    `;
});

export const DetailsButton = styled.button(({theme}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: 40%;
        padding: 0.5rem;
        border: none;
        outline: none;
        font-weight: bold;
        color: ${theme.colors['dark-grey']};
        &:hover{
            cursor: pointer;
            color: ${theme.colors['light-green']};
            transition: .5s;
        }
    `;
});