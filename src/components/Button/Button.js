import React from 'react';
import {TheButton} from './Button.styles';

const Button = ({buttonName, isSubmit, isDisabled, onButtonClicked, margin, height}) => {
    return(
        <TheButton
            onClick={(e) => onButtonClicked ? onButtonClicked(e) : null}
            type={ isSubmit ? 'submit' : 'button' }
            disabled={isDisabled}
            style={{margin: margin, height: height}}
        >
            {buttonName}
        </TheButton>
    );
}

export default Button;