import React from 'react';
import Button from "../Button/Button";
import Checkbox from '@material-ui/core/Checkbox';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import {
    RankingCardContainer,
    CardHeader,
    IconContainer,
    TextContainer,
    Title,
    SecondaryText,
    RankingLists,
    RankingListItem
} from './RankingCard.styles';

const RankingCard = ({data, structureData, buttonName}) => {
    const handleChange = () => {
        console.log('checked');
    }

    return(
        <RankingCardContainer>
            <CardHeader>
                <IconContainer>
                    <PlayCircleOutlineOutlinedIcon fontSize="large" />
                </IconContainer>
                <TextContainer>
                    <Title>{structureData.heading}</Title>
                    <SecondaryText>
                        <h3>{structureData.subheading}</h3>
                        <p>{structureData.subheadingTwo}</p>
                    </SecondaryText>
                </TextContainer>
            </CardHeader>
            <RankingLists>
                <RankingListItem>
                    <h3>{structureData.columnOne}</h3>
                    { data.map((item, index) => {
                        return <li key={index}>{item.profile}</li>
                    }) }
                </RankingListItem>
                <RankingListItem>
                    <h3>{structureData.columnTwo}</h3>
                    { data.map((item, index) => {
                        return <li key={index}>{item.clients}</li>
                    }) }
                </RankingListItem>
                <RankingListItem>
                    <h3>{structureData.columnThree}</h3>
                    { data.map((item, index) => {
                        return <li key={index}>{item.percentage}</li>
                    }) }
                </RankingListItem>
                <RankingListItem>
                    <h3>{structureData.columnFour}</h3>
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Checkbox color="primary" type="checkbox" onChange={() => handleChange()}/>
                            </div>
                        )
                    }) }
                </RankingListItem>
            </RankingLists>
            {
                data.map((item, index) => {
                    return(
                        <Button key={index} buttonName={item.buttonName} isSubmit={false} margin="0"/>
                    )
                })
            }
        </RankingCardContainer>
    );
}

export default RankingCard;