import React from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';
import {TheContainer, StyledP} from './CircularProgressContainer.styles';

const CircularProgressContainer = ({percentage, progressDescription, width, height, pathColor, textColor}) => {
    return(
        <TheContainer style={{width: width, height: height}}>
            <CircularProgress percentage={percentage} pathColor={pathColor} textColor={textColor}/>
            <StyledP>{progressDescription}</StyledP>
        </TheContainer>
    );
}

export default CircularProgressContainer;
