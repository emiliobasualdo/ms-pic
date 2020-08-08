import styled, {keyframes} from 'styled-components';

export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BadgeAnimation = keyframes`
    0% {
        transform: scale(.2);
        opacity: 1;
    }
    50% {
        transform: scale(1.6);
        opacity: .4;
    }
    100% {
        transform: scale(1.6);
        opacity: 0;
    }
`

export const BadgeAfter = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 35%;
    background-color: #ff4500;
    position: absolute;
    top: 5%;
    right: 5%;
    animation: ${BadgeAnimation} 3s ease-in-out infinite;
`
