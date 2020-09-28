import styled, {css, keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const TitleCardContainer = styled.div(({theme}) => {
    return css`
        background-color: ${theme.colors.white};
        height: 4rem;
        padding: 1.5rem;
        margin: 2.5rem 0;
        display: flex;
        justify-content: ${props => props.withSlider === true ? 'flex-start' : 'space-between'};
        align-items: center;
        animation: ${fadeIn} .5s .2s ease-in backwards;
    `;
});

export const FirstContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: auto;
`;

export const TitleContainer = styled.div`
    margin-left: 1.5rem;
`;

export const Title = styled.h2(({theme}) => {
    return css`
        font-size: 1.2rem;
    `;
});

export const SecondContainer = styled.ul(({theme}) => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        height: 3rem;
        list-style: none;
        padding: 0 5rem;
        border-bottom: ${props => props.borderLine && '1px solid #eee'};
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
            background-color: ${theme.colors.lightGrey};
            transition: 0.4s;
            color: ${theme.colors.lightGreen};
        }
    `;
});

export const ThirdContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Input = styled.div`
    margin: 0 1rem;
    & p {
        font-weight: 800;
        text-align: right;
        margin-right: 1rem;
    }
`;

export const SliderContent = styled.div`
    margin-left: 10rem;
`;

export const Range = styled.span`
    font-size: .8rem;
    font-weight: 800;
    color: #626262;
`;

export const SliderValue = styled.span`
    margin-left: .2rem;
    color: #00c292;
    font-size: .8rem;
`;
