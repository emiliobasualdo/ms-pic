import styled from 'styled-components';

export const HorizontalDataContainer = styled.div`
    background-color: #fff;
    width: 100%;
    margin-top: -40px;
    padding-top: 2rem;
    padding-bottom: 3rem;
`;

export const Table = styled.table`
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
    font-family: Roboto, sans-serif;
    & thead {
        border-bottom: 1px solid #eee;
        & th {
            font-size: 1.4rem;
            font-weight: 800;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
        }
    }
    & tbody {
        & {
            td {
                padding-top: 1rem;
                text-align: center;
                font-size: .9rem;
            }
        }
    }
`;
