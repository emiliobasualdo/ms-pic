import styled, {css} from 'styled-components';

export const LargeCircularProgressContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        margin-bottom: 2rem;
    `;
});

export const StyledH3 = styled.h3(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        font-family: ${theme.typography.fonts.secondary};
    `;
});

export const CirclesContainer = styled.div`
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin: 1rem 0;
`;