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
`;