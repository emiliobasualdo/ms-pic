import styled, { keyframes } from 'styled-components';

const PopupAnimation = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const PopupWrapper = styled.div`
    height: 20rem;
    width: 20rem;
    position: absolute;
    top: 8%;
    right: 10%;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation: ${PopupAnimation} .8s ease;
`;

export const Content = styled.div`
    width: 100%;
`;

export const Heading = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    & li {
        padding: 1.5rem 0;
    }
`;
