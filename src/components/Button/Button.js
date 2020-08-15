import React from 'react';
import {TheButton} from './Button.styles';

const Button = ({buttonName}) => {
    return(
        <TheButton>{buttonName}</TheButton>
    );
}

export default Button;