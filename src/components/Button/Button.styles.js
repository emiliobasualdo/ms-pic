import styled, {css} from "styled-components";

export const TheButton = styled.button(({theme}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: 100%;
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
