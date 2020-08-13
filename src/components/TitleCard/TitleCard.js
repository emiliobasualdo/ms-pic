import React from 'react';
import {
    TitleCardContainer,
    FirstContainer,
    Title,
    SecondContainer,
    Item
} from './TitleCard.styles';

const TitleCard = (props) => {
    return(
        <TitleCardContainer>
            <FirstContainer>
                {props.icon}
                <div>
                    <Title>{props.title}</Title>
                    <p>{props.description}</p>
                </div>
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