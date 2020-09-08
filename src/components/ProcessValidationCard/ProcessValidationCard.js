import React from 'react';
import {SimpleTable} from '../index';
import {
    ProcessValidationContainer,
    CardHeader,
    IconContainer,
    TextContainer,
    Title,
    SecondaryText
} from './ProcessValidationCard.styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const ProcessValidationCard = (props) => {

    return(
        <ProcessValidationContainer>
            <CardHeader>
                <IconContainer>
                    <PlayCircleOutlineIcon fontSize="large" />
                </IconContainer>
                <TextContainer>
                    <Title>{props.heading}</Title>
                    <SecondaryText>
                        <h3>{props.subheading}</h3>
                    </SecondaryText>
                </TextContainer>
            </CardHeader>
            <SimpleTable
                headers={props.headers}
                rows={props.rows}
                buttonName={props.buttonName}
            />
        </ProcessValidationContainer>
    );
}

export default ProcessValidationCard;