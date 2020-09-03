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
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const BarGraphCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CircularProgressCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    min-height: 80vh;
    width: auto;
`;

export const VerticalCircularProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* margin: 2rem 0;
    min-height: 80vh; */
    width: 68%;
`;