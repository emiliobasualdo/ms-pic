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
                <Item>{props.item1}</Item>
                <Item>{props.item2}</Item>
                <Item>{props.item3}</Item>
            </SecondContainer>
        </TitleCardContainer>
    );
}

export default TitleCard;