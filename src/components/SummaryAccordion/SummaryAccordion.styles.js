import styled, { keyframes } from 'styled-components';

const GrowingLine = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`;

export const AccordionContainer = styled.div`
    padding: 1rem 4rem 0 0;
    width: 50%;
`;

export const AccordionItem = styled.div`
    padding: .5rem 0;
    height: 100%;
`;

export const Item = styled.span`
    display: flex;
    align-items: center;
    & p {
        margin-left: 1rem;
    }
`;

export const GreyLine = styled.div`
    border: 1px solid #ededed;
    position: relative;
    margin-top: 1rem;
`;

export const AnimatedLine = styled.hr`
    position: absolute;
    border: 1px solid ${props => props.lineColor};
    width: 100%;
    animation: ${GrowingLine} .5s ease;
    transformation-origin: center;
`;
