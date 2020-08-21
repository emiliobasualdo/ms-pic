import React from 'react';
import Button from '../Button/Button';
import {
    LargeCircularProgressContainer,
    StyledH3,
    CirclesContainer
} from './LargeCircularProgress.styles';

const LargeCircularProgressCard = ({title, children}) => {
    return(
        <LargeCircularProgressContainer>
            <StyledH3>{title}</StyledH3>
            <CirclesContainer>
                {children}
            </CirclesContainer>
            <Button buttonName="Más Detalles"/>
        </LargeCircularProgressContainer>
    );
}

export default LargeCircularProgressCard;