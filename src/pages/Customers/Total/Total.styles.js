import styled, {keyframes}from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const CustomersTotalContent = styled.div`
    width: auto;
    min-height: 100vh;
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const BarGraphCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LastContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`;