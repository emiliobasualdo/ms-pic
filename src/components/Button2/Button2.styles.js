import styled, {css} from 'styled-components';

export const Butt = styled.button(({theme, active}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: auto;
        padding: 0.5rem;
        margin: 0 0.8rem;
        outline: none;
        font-weight: bold;
        color: ${theme.colors.darkGrey};
        border: 0;
        background-position:50% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size .3s;
        &:hover{
            cursor: pointer;
            color: ${theme.colors.lightGreen};
            background-color: ${theme.colors.lightGrey};
            transition: .5s;
            border-radius: 5px;
        }
        background-image: ${active ? `linear-gradient(${theme.colors.lightGreen}, ${theme.colors.lightGreen})` : 'none'};
        background-size: ${active ? '100% 2px' : 'none'};
    `;
});