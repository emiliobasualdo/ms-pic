import React from 'react';
import {
    ColumnDataContainer,
    StyledDiv,
    StyledP,
    StyledSpan
} from './ColumnData.styles';

const ColumnData = (props) => {
    return(
        <ColumnDataContainer>
            <StyledDiv>
                <StyledP>{props.clientsText}</StyledP>
                <StyledSpan>{props.clientsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.volumeOpText}</StyledP>
                <StyledSpan>{props.volumeOpAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.volumeCoText}</StyledP>
                <StyledSpan>{props.volumeReAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.volumeReText}</StyledP>
                <StyledSpan>{props.transactionsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.transactionsText}</StyledP>
                <StyledSpan>{props.ticketsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.ticketsText}</StyledP>
                <StyledSpan>{props.volumeAmmount}</StyledSpan>
            </StyledDiv>
        </ColumnDataContainer>
    );
}

export default ColumnData;