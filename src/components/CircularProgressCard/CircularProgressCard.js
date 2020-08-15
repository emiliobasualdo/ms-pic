import React from 'react';
import {MainProgressContainer, CirclesContainer, StyledH4} from './CircularProgressCard.styles';

const CircularProgressCard = ({children, CircularProgressCardTitle, height}) => {
    return(
        <MainProgressContainer style={{height: height}}>
            <StyledH4>{CircularProgressCardTitle}</StyledH4>
            <CirclesContainer>
                {children}
            </CirclesContainer>
        </MainProgressContainer>
    );
}

export default CircularProgressCard;