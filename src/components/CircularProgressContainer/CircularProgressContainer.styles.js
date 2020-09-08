import styled, {css} from "styled-components";

export const TheContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledP = styled.p(({theme}) => {
    return css`
        color: ${theme.colors.darkGrey};
        font-size: 0.8rem;
        margin: .7rem 0;
    `;
});
