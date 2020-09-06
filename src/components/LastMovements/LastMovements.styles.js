import styled from "styled-components";

export const LastMovementsContainer = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    padding: 2rem;
    width: ${props => props.title === 'Últimos Movimientos' ? 75 : 100}%;
    height: auto;
    margin-left: ${props => props.title === 'Últimos Movimientos' ? 1 : 0}rem;
    margin-top: ${props => props.title === 'Últimos Movimientos' ? 0 : 2}rem;
`;

export const LastMovementsHeadings = styled.div`
    & h2 {
        font-size: 1.3rem;
    }
    & h3 {
        margin-top: .6rem;
        font-weight: 400;
        font-size: .9rem;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-top: 2rem;
    table-layout: fixed;
    border-collapse: collapse;
    & tr {
        display: flex;
        justify-content: space-between;
    }
    & th {
        font-size: .9rem;
        padding: 1rem 0;
        width: 8rem;
        text-align: center;
    }
    & tbody {
        & tr {
            border-top: 1px solid #eee;
        }
        & td {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem 0;
            font-size: .9rem;
            width: 8rem;
        }
    }
`;
