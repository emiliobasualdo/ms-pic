import styled, {keyframes} from "styled-components";

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const PrepaidBusinessContainer = styled.div`
    width: auto;
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const CircularGraphicsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;

export const VerticalContainer = styled.div`
    background-color: white;
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    min-height: 30rem;
`;

export const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
`;

export const LastContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
`;