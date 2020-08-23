import styled from 'styled-components';

export const RankingCardContainer = styled.div`
    height: 40rem;
    width: 48%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin: 2rem 0;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.5rem;
    align-self: flex-start;
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

export const RankingLists = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
`;

export const RankingListItem = styled.ul`
    list-style: none;
    & h3 {
        font-size: 1rem;
    }
    & li {
        padding: 1rem 0;
    }
    & div {
        padding: .25rem 0;
    }
`;
