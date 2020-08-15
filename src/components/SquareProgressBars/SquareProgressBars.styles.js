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

export const RechargesQuantityTitle = styled.h3(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
    `;
});

export const Subtitle = styled.p(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        font-size: 0.8rem;
    `;
});

export const Img = styled.img`
    height: 50%;
`;