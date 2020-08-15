import styled, {css, keyframes} from "styled-components";
import {fadeIn} from "../ColumnData/ColumnData.styles";

export const LargeColumnDataContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem 1rem 1rem 1rem;
        font-family: ${theme.typography.fonts.secondary};
        min-width: 15rem;
        animation: ${fadeIn} .5s .2s ease-in backwards;
    `;
});

export const Heading = styled.div`
    display: flex;
`;

export const IconContainer = styled.div`
    padding: 1.5rem;
    font-size: 1rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
`;

export const TopText = styled.h2`
    font-size: 1.3rem;
    margin-top: .5rem;
`;

export const BottomText = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    margin-top: .5rem;
`;
