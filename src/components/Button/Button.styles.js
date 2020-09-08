import styled, {css} from "styled-components";

export const TheButton = styled.button(({theme}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: auto;
        padding: 0.5rem;
        border: none;
        outline: none;
        font-weight: bold;
        color: ${theme.colors.darkGrey};
        &:hover{
            cursor: pointer;
            color: ${theme.colors.lightGreen};
            transition: .5s;
        }
    `;
});