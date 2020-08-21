import React from 'react';
import Button from '../Button/Button';
import {
    RechargesOriginContainer,
    RechargesTitle,
    RechargesOriginCircles
} from './SquareProgressCircular.styles';

const SquarePreogressCircular = ({children, width, title, buttonName}) => {
    return(
        <RechargesOriginContainer style={{width: width}}>
            <RechargesTitle>{title}</RechargesTitle>
            <RechargesOriginCircles>
                {children}
            </RechargesOriginCircles>
            <Button buttonName={buttonName}/>
        </RechargesOriginContainer>
    );
}

export default SquarePreogressCircular;