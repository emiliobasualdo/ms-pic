import styled from 'styled-components';

export const MainContainer = styled.div`
    height: auto;
    width: 48%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    margin: 2rem 0;
    padding: 1rem 0;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
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
    & h3,
    & p {
        font-size: 1rem;
    }
    & h3 {
        font-weight: 400;
    }
    & p {
        font-weight: 800;
    }
`;

export const Table = styled.table`
    margin: 1rem 0;
    width: 100%;
`;

export const StyledTd = styled.td`
    text-align: center;
`;