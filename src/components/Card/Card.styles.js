import styled, {css, keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const Card2Container = styled.div(({theme}) => {
    return css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: ${theme.colors.white};
        height: auto;
        padding: 1.2rem;
        margin: 2.5rem 0;
        animation: ${fadeIn} .5s .2s ease-in backwards;
    `;
});

export const FirstContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25%;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
`;

export const SecondaryContainer = styled.ul(({theme}) => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 3rem;
        list-style: none;
        padding: 0 5rem;
        border-bottom: 1px solid ${theme.colors['light-grey']};
        background-color: transparent;
    `;
});

export const Item = styled.button(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        font-size: 0.9rem;
        color: ${theme.colors.blue};
        text-decoration: none;
        outline: none;
        border: none;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: transparent;
        cursor: pointer;
        padding: 0.9rem 1.2rem;
        margin-right: 15px;
        outline: none;
        &:hover{
            background-color: ${theme.colors['light-grey']};
            transition: 0.4s;
            color: ${theme.colors['light-green']};
        }
    `;
});

export const SecondContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
`;

export const StyledP = styled.p`
    font-size: 0.8rem;
`;
