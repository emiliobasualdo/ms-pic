import styled, { keyframes } from 'styled-components';

const GrowingLine = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
    }
`;

const WrapperAnimation = keyframes`
    0% {
        height: 0px;
    }
    100% {
        height: 23rem;
    }
`;

const CirclesOpacityAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const CirclesWrapper = styled.div`
    animation: ${WrapperAnimation} .3s ease;
`;

export const CirclesOpacity = styled.div`
    animation: ${CirclesOpacityAnimation} 1s .3s ease backwards;
`;

export const AccordionContainer = styled.div`
    padding: 1rem 4rem 0 0;
    width: 50%;
`;

export const AccordionItem = styled.div`
    padding: 2rem 0 0 0;
    height: 100%;
`;

export const ActionParagraph = styled.p`
    font-weight: 800;
`;

export const Item = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
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

export const CircularProgressCardsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
`;
