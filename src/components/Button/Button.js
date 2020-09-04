import React from 'react';
import {TheButton} from './Button.styles';

const Button = ({buttonName, isSubmit, isDisabled, onButtonClicked, margin}) => {
    return(
        <TheButton
            onClick={(e) => onButtonClicked ? onButtonClicked(e) : null}
            type={ isSubmit ? 'submit' : 'button' }
            disabled={isDisabled}
            style={{margin: margin}}
        >
            {buttonName}
        </TheButton>
    );
}

export default Button;