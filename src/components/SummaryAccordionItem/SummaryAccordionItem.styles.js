import styled, { keyframes } from 'styled-components';

const WrapperAnimation = keyframes`
    0% {
        height: 0px;
    }
    100% {
        height: 101px;
    }
`;

const TableAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const TableWrapper = styled.div`
    animation: ${WrapperAnimation} .3s ease;
`;

export const Table = styled.table`
    width: 100%;
    margin-top: 2rem;
    border: 1px solid #000;
    border-collapse: collapse;
    animation: ${TableAnimation} 1.7s ease;
    & th,
    & td {
    padding: .2rem 1rem;
        border: 1px solid #000;
    }
    & tr td:first-child {
        font-weight: 800;
    }
`;
