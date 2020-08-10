import styled, { keyframes } from 'styled-components';

const tabsSkew = keyframes`
    0% {
        transform: rotateX(90deg) skew(-40deg);
        opacity: 0;
    }
    20% {
        opacity: .5;
    }
    80% {
        transform: rotateX(-20deg);
    }
    100% {
        transform: rotateX(0) skew(0);
        opacity: 1;
    }
`

export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 70px;
    margin: 40px 0 0 0;
    animation: ${ tabsSkew } .7s ease-in-out;
`

export const StyledUl = styled.ul`
    display: flex;
    list-style: none;
`

export const LiContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
`

export const StyledLi = styled.li`
    font-family: Roboto, sans-serif;
    font-size: 14px;
    padding: 20px;
`
