import styled, {css} from 'styled-components';

export const TableContainer = styled.div`
    background-color: #fff;
    width: 100%;
    padding-bottom: 2rem;
`;

export const TableHeader = styled.div`
    display: flex;
`;

export const TableIcon = styled.div`
    padding: 2rem 1.5rem;
`;

export const TableHeadings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h2 {
        font-size: 1.3rem;
    }
    p {
        font-size: .9rem;
    }
`;

export const Table = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 0 3rem 0 3rem;
    box-sizing: border-box;
    & tr {
        width: 100%;
    }
    & tr th {
        font-size: .9rem;
        width: 25%;
    }
    & tr td {
        text-align: center;
    }
    hr {
        height: 1px;
        background-color: #eee;
        border: none;
    }
`;

export const OptionForm = styled.div`
    width: 100%;
`;

export const OptionFormHeading = styled.div`
    padding: 1rem 0;
    font-weight: 600;
    font-size: .9rem;
    min-width: 25%;
    text-align: center;
`;

export const OptionFormItem = styled.div`
    padding: 1rem 0;
    font-size: .8rem;
    text-align: center;
    min-height: 1.4rem;
`;

export const Select = styled.select`
    width: 80%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
`;

export const Button = styled.button(({theme}) => {
    return css`
        align-self: center;
        background-color: transparent;
        width: auto;
        padding: 0.5rem;
        border: none;
        outline: none;
        font-weight: bold;
        color: ${theme.colors.darkGrey};
        &:hover{
            cursor: pointer;
            color: ${theme.colors.lightGreen};
            transition: .5s;
        }
    `;
});
