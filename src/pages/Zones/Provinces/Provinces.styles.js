import styled, {keyframes}from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const ZonesProvincesContent = styled.div`
    width: auto;
    animation: ${fadeIn} .5s .2s ease-in backwards;
    margin-bottom: 5rem;
`;

export const ProvincesDataContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    background-color: #fff;
    padding: 2rem;
    margin: 3rem 0;
    transition: all .4s ease;
`;

export const Heading = styled.h2`
    font-size: 1.4rem;
`;

export const AccordionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;
