import styled, {keyframes}from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const CustomersProfilesContent = styled.div`
    width: auto;
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const RankingsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
