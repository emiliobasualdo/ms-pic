import React from 'react';
import Button from '../Button/Button';
import {
    RechargesOriginContainer,
    RechargesTitle,
    RechargesOriginCircles
} from './SquarePayments.styles';

const SquarePayments = ({children, width, title}) => {
    return(
        <RechargesOriginContainer style={{width: width}}>
            <RechargesTitle>{title}</RechargesTitle>
            <RechargesOriginCircles>
                {children}
            </RechargesOriginCircles>
            <Button buttonName="Ver Todo"/>
        </RechargesOriginContainer>
    );
}

export default SquarePayments;