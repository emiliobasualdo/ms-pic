import styled, { keyframes } from 'styled-components';

const PopupAnimationIn = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const PopupWrapper = styled.div`
    height: 20rem;
    width: 20rem;
    position: absolute;
    z-index: 9999;
    top: 8%;
    right: 10%;
    background-color: #fff;
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, .2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation: ${PopupAnimationIn} .8s ease;
`;

export const Heading = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: .8rem;
    min-height: 13.5rem;
    width: 100%;
    & a {
        color: #000;
        text-decoration: none;
    }
    & li {
        cursor: pointer;
        padding: .8rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const IconWrapper = styled.div`
    padding: 0 2rem;
`;

export const ListItemWrapper = styled.div`
    width: 100%;
`;

export const ListTitle = styled.h3`
    font-weight: 800;
    font-size: .9rem;
`;

export const ListDescription = styled.p`
    margin-top: .5rem;
`;

export const LinearProgressWrapper = styled.div`
    width: 80%;
    margin-left: 2rem;
`;

export const LinearProgressDescription = styled.p`
    margin-bottom: .4rem;
`;

export const PopupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

export const PopupInput = styled.input`
    border: none;
    padding: .8rem 3rem;
    border-radius: .2rem;
    background-color: #f6f8fa;
    font-size: 1rem;
    margin-bottom: 1rem;
    &::placeholder {
        font-size: 1rem;
    }
`;

export const FormIconWrapper = styled.span`
    position: absolute;
    top: 37.5%;
    left: 12%;
`;

export const LoadingContent = styled.div`
    min-height: 11rem;
    display: flex;
    align-items: center;
`;
