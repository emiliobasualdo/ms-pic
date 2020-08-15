import styled, {css} from "styled-components";

export const TheContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledP = styled.p(({theme}) => {
    return css`
        color: ${theme.colors['dark-grey']};
        font-size: 0.8rem;
    `;
});