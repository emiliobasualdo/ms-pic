import styled, {css} from 'styled-components';

export const TwoCircularProgressContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${theme.colors.white};
        height: auto;
        width: 28%;
        padding: 1rem 0;
    `;
});

export const StyledH3 = styled.h3(({theme}) => {
    return css`
        color: ${theme.colors.darkGrey};
        font-family: ${theme.typography.fonts.secondary};
        height: 100%;
        padding: 0 1rem;
    `;
});

export const Cardontent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
`;