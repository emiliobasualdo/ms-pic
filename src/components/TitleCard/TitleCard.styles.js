import styled, {css} from "styled-components";

export const TitleCardContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        height: 4rem;
        padding: 1.2rem;
        margin: 2.5rem 0;
        display: flex;
        justify-content: space-between;
    `;
});

export const FirstContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
`;

export const Title = styled.h2(({theme}) => {
    return css`
        font-size: 1.2rem;
    `;
});

export const SecondContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    list-style: none;
    padding: 0 5rem;
`;

export const Item = styled.button(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        font-size: 0.9rem;
        color: ${theme.colors.blue};
        text-decoration: none;
        outline: none;
        border: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 10px 15px;
        margin-right: 15px;
        outline: none;
        &:hover{
            background-color: ${theme.colors['light-grey']};
            transition: 0.4s;
            color: ${theme.colors['light-green']};
        }
    `;
});