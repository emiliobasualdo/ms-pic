import styled, { keyframes } from 'styled-components';

const PopupAnimationIn = keyframes`
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
    z-index: 9999;
    top: 8%;
    right: 10%;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation: ${PopupAnimationIn} .8s ease;
`;

export const Heading = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: .8rem;
    padding-bottom: 1rem;
    min-height: 11rem;
    width: 100%;
    & a {
        color: #000;
        text-decoration: none;
    }
    & li {
        cursor: pointer;
        padding: .8rem 0;
        display: flex;
    }
`;

export const IconWrapper = styled.div`
    padding: 0 2rem;
`;

export const ListTitle = styled.h3`
    font-weight: 800;
    font-size: .9rem;
`;

export const LoadingContent = styled.div`
    min-height: 11rem;
    display: flex;
    align-items: center;
`;
