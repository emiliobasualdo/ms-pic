import React from 'react';
import {
    TitleCardContainer,
    FirstContainer,
    TitleContainer,
    Title,
    SecondContainer,
    Item
} from './TitleCard.styles';

const TitleCard = (props) => {
    return(
        <TitleCardContainer>
            <FirstContainer>
                {props.icon}
                <TitleContainer>
                    <Title>{props.title}</Title>
                    <p>{props.description}</p>
                </TitleContainer>
            </FirstContainer>
            <SecondContainer>
                <Item>{props.diary}</Item>
                <Item>{props.weekly}</Item>
                <Item>{props.monthly}</Item>
            </SecondContainer>
        </TitleCardContainer>
    );
}

export default TitleCard;