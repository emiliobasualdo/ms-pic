import styled, {keyframes, css} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const CardContainer = styled.aside`
    background-color: #fff;
    height: 190px;
    animation: ${fadeIn} 1s .2s ease-in backwards;
`;

export const CardTop = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 40px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & .top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }
    & .card__list {
        min-width: 550px;
        height: 42px;
        display: flex;
        flex-direction: column;
        & .bottom-line {
            width: 100%;
            min-height: 1px;
            background-color: rgb(221,221,221);
            border: none;
        }
    }
`;

export const CardHeader = styled.div`
    display: flex;
    align-self: start;
    margin-right: auto;
    flex-wrap: wrap;
    & .card-header__icon {
        font-size: 45px;
    }
    & .card-header__text {
        margin-left: 30px;
    }
    & h2 {
        font-family: Roboto, sans-serif;
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

export const CardTabs = styled.ul(({theme}) => {
    return css`
        display: flex;
        justify-self: flex-end;
        align-self: center;
        list-style: none;
        padding-top: 0.6rem;
        & button {
            border: none;
            background-color: transparent;
            cursor: pointer;
            padding: 10px 15px;
            margin-right: 15px;
            outline: none;
            &:hover{
                background-color: ${theme.colors['light-grey']};
                transition: 0.4s;
            }
            &:hover > li {
                color: ${theme.colors['light-green']};
            }
        }
        & li {
            font-family: ${theme.typography.fonts.secondary};
            font-size: 0.9rem;
            color: ${theme.colors.blue};
        }
    `;
});

export const CardData = styled.div`
    display: flex;
    align-items: flex-start;
    & h2,
    & p {
        font-family: Roboto, sans-serif;
    }
    & h2 {
        font-size: 1.2rem;
    }
    & p {
        font-size: 14px;
    }
    & .clients {
        padding: 10px 30px 20px 40px;
        width: 20%;
    }
    & .volumes-data {
        display: flex;
        justify-content: space-around;
        width: 80%;
        & > div {
            padding-top: 10px;
            padding-right: 40px;
        }
    }
`;