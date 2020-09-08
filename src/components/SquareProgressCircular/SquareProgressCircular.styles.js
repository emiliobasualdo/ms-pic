import styled, {css} from "styled-components";

export const RechargesOriginContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
    `;
});

export const RechargesTitle = styled.h3(({theme}) => {
    return css`
        color: ${theme.colors.darkGrey};
    `;
});

export const RechargesOriginCircles = styled.div`
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
`;