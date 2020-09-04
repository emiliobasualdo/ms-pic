import styled, {css} from 'styled-components';

export const Butt = styled.button(({theme, active}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: auto;
        padding: 0.5rem;
        margin: 0 0.8rem;
        border: none;
        outline: none;
        font-weight: bold;
        color: ${theme.colors['dark-grey']};
        &:hover{
            cursor: pointer;
            color: ${theme.colors['light-green']};
            background-color: ${theme.colors['light-grey']};
            transition: .5s;
            border-radius: 5px;
        }
        border-bottom: ${active ? '1px solid #EDEDED' : 'none'};
        transition: .8s;
        background-size: 100% 3px;
    `;
});