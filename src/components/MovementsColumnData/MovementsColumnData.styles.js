import styled from 'styled-components';

export const MovementsContainer = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 2rem;
    width: 25%;
    height: auto;
`;

export const MovementsHeadings = styled.div`
    & h2 {
        font-size: 1.3rem;
    }
    & h3 {
        margin-top: 1rem;
        font-weight: 400;
        font-size: .9rem;
    }
`;

export const MovementsItems = styled.div`
    margin-top: 2rem;
    & h3 {
        padding: 1rem 0;
        font-size: .9rem;
        text-align: center;
    }
    & h3:not(:first-child) {
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    & h3:first-child {
        border-bottom: 1px solid #eee;
    }
    & p {
        padding: 1rem 0;
        font-size: 1.3rem;
        text-align: center;
        font-weight: 600;
    }
`;
