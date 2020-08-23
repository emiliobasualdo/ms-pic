import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    margin-top: -40px;
    background-color: #fff;
    padding-bottom: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
    min-width: 20%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 1rem;
    padding: 1rem 2rem 2rem 2rem;
    border-bottom: 1px solid #eee;
`;

export const ItemLabel = styled.div`
    text-align: center;
    font-weight: 800;
`;

export const Select = styled.select`
    border: none;
    border-bottom: 1px solid #000;
    margin-top: .5rem;
    padding: .5rem 0;
    outline: none;
`;
