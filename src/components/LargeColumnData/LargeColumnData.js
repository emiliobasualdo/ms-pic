import React from 'react';
import Button from '../Button/Button';
import {StyledDiv, StyledP, StyledSpan} from '../ColumnData/ColumnData.styles';
import {
    LargeColumnDataContainer,
    Heading,
    IconContainer,
    TextContainer,
    TopText,
    BottomText
} from "./LargeColumnData.styles";

const LargeColumnData = (props) => {

    return(
        <LargeColumnDataContainer>
            <Heading>
                <IconContainer>{props.icon}</IconContainer>
                <TextContainer>
                    <TopText>{props.header}</TopText>
                    <BottomText>{props.subheader}</BottomText>
                </TextContainer>
            </Heading>
            <StyledDiv>
                <StyledP>{props.commerceText}</StyledP>
                <StyledSpan>{props.commerceAmmount}</StyledSpan>
            </StyledDiv>
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
                <StyledSpan>{props.volumeCoAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.volumeReText}</StyledP>
                <StyledSpan>{props.volumeReAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.transactionsText}</StyledP>
                <StyledSpan>{props.transactionsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.vFloatText}</StyledP>
                <StyledSpan>{props.vFloatAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.ticketsText}</StyledP>
                <StyledSpan>{props.ticketsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageTxtText}</StyledP>
                <StyledSpan>{props.averageTxtAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageVoText}</StyledP>
                <StyledSpan>{props.averageVoAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageTicketsText}</StyledP>
                <StyledSpan>{props.averageTicketsAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageConsumptionText}</StyledP>
                <StyledSpan>{props.averageConsumptionAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageTxtRText}</StyledP>
                <StyledSpan>{props.averageTxtRAmmount}</StyledSpan>
            </StyledDiv>
            <StyledDiv>
                <StyledP>{props.averageRechargeText}</StyledP>
                <StyledSpan>{props.averageRechargeAmmount}</StyledSpan>
            </StyledDiv>
            <Button buttonName={props.buttonName}/>
        </LargeColumnDataContainer>
    );
}

export default LargeColumnData;
