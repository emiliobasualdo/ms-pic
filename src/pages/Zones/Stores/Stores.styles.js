import styled, {keyframes}from 'styled-components';

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
`;

export const ZonesStoresContent = styled.div`
    width: auto;
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const StoresSelectionContainer = styled.div`
    background-color: #fff;
    width: auto;
    animation: ${fadeIn} .5s .2s ease-in backwards;
    padding: 2rem;
`;

export const Stores = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    & button {
        font-weight: 400;
    }
`;

export const StoreSelectedContainer = styled.div`
    background-color: #fff;
    width: 100%;
    margin-top: 2rem;
    padding: 2rem;
    box-sizing: border-box;
    animation: ${fadeIn} .5s .2s ease-in backwards;
`;

export const MapAndZones = styled.div`
    width: 100%;
    display: flex;
`;

export const MapData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
`;

export const Map = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 25rem;
`;

export const Zones = styled.div`
    width: 55%;
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & div > div {
        margin: .6rem 0;
    }
    & h4 {
        font-weight: 400;
    }
`;

export const StoresTable = styled.table`
    width: 100%;
    text-align: center;
    & tr th {
        padding: .5rem;
    }
    & tr td {
        padding: .5rem;
        border-top: 1px solid #eee;
    }
`;

export const SelectedStoreInTable = styled.td`
    font-weight: 800;
`;