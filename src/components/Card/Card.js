import React from 'react';
import {
    Card2Container,
    FirstContainer,
    MainContainer,
    Title,
    SecondaryContainer,
    Item,
    SecondContainer,
    StyledP
} from './Card.styles';

const Card2 = (props) => {
    return(
        <Card2Container>
            <FirstContainer>
                <MainContainer>
                    {props.icon}
                    <div>
                        <Title>{props.header}</Title>
                        <p>{props.paragraph}</p>
                    </div>
                </MainContainer>
                <SecondaryContainer>
                    <Item>{props.diary}</Item>
                    <Item>{props.weekly}</Item>
                    <Item>{props.monthly}</Item>
                </SecondaryContainer>
            </FirstContainer>
            <SecondContainer>
                <div>
                    <h3>{props.clientsAmmount}</h3>
                    <StyledP>{props.clientsText}</StyledP>
                </div>
                <div>
                    <h3>{props.volumeOpAmmount}</h3>
                    <StyledP>{props.volumeOpText}</StyledP>
                </div>
                <div>
                    <h3>{props.volumeCoAmmount}</h3>
                    <StyledP>{props.volumeCoText}</StyledP>
                </div>
                <div>
                    <h3>{props.volumeReAmmount}</h3>
                    <StyledP>{props.volumeReText}</StyledP>
                </div>
                <div>
                    <h3>{props.transactionsAmmount}</h3>
                    <StyledP>{props.transactionsText}</StyledP>
                </div>
                <div>
                    <h3>{props.ticketsAmmount}</h3>
                    <StyledP>{props.ticketsText}</StyledP>
                </div>
            </SecondContainer>
        </Card2Container>
    );
}

export default Card2;