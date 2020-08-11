import styled, {keyframes, css} from 'styled-components';
import {Link} from "@reach/router";

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
`;

export const TabsContainer = styled.div(({theme}) => {
    return css`
        display: flex;
        align-items: center;
        background-color: ${theme.colors.white};
        height: 4.3rem;
        margin: 2.5rem 0 0 0;
        animation: ${ tabsSkew } .7s ease-in-out;
    `;
});

export const StyledUl = styled.ul`
    display: flex;
    list-style: none;
`;

export const TheLink = styled(Link)(({theme}) => {
    return css`
        text-decoration: none;
        color: ${theme.colors.black};
    `;
});

export const LiContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.8rem;
`;

export const StyledLi = styled.li(({theme}) => {
    return css`
        font-family: ${theme.typography.fonts.secondary};
        font-size: 0.9rem;
        padding: 1.2rem;
    `;
});