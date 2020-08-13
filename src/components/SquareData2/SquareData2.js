import React from 'react';
import {
    SquareDataContainer,
    StyledTitle,
    SquareContainer,
    HeaderContainer,
    StyledDivContainer,
    StyledHeaderSpan,
    StyledDiv,
    DetailsButton
} from './SquareData2.styles';

const SquareData2 = (props) => {
    return(
        <SquareDataContainer>
            <StyledTitle>{props.title}</StyledTitle>
            <HeaderContainer>
                <StyledHeaderSpan>{props.headerColumn1}</StyledHeaderSpan>
                <StyledHeaderSpan>{props.headerColumn2}</StyledHeaderSpan>
            </HeaderContainer>
            <SquareContainer>
                <StyledDivContainer>
                    <StyledDiv>{props.oneColumnOne}</StyledDiv>
                    <StyledDiv>{props.twoColumnOne}</StyledDiv>
                    <StyledDiv>{props.threeColumnOne}</StyledDiv>
                    <StyledDiv>{props.fourColumnOne}</StyledDiv>
                    <StyledDiv>{props.fiveColumnOne}</StyledDiv>
                    <StyledDiv>{props.sixColumnOne}</StyledDiv>
                </StyledDivContainer>
                <StyledDivContainer>
                    <StyledDiv>{props.oneColumnTwo}</StyledDiv>
                    <StyledDiv>{props.twoColumnTwo}</StyledDiv>
                    <StyledDiv>{props.threeColumnTwo}</StyledDiv>
                    <StyledDiv>{props.fourColumnTwo}</StyledDiv>
                    <StyledDiv>{props.fiveColumnTwo}</StyledDiv>
                    <StyledDiv>{props.sixColumnTwo}</StyledDiv>
                </StyledDivContainer>
            </SquareContainer>
            <DetailsButton>Más Detalles</DetailsButton>
        </SquareDataContainer>
    );
}

export default SquareData2;