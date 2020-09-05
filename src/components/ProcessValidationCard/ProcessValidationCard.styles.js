import styled from "styled-components";

export const ProcessValidationContainer = styled.div`
    height: auto;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 2rem 0;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.5rem;
    align-self: flex-start;
`;

export const IconContainer = styled.div`
    margin-right: auto;
    padding: 0 2rem;
`;

export const TextContainer = styled.div`
    width: 80%;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
`;

export const SecondaryText = styled.div`
    margin-top: 1rem;
    & h3{
        font-size: 1rem;
        font-weight: 400;
    }
`;