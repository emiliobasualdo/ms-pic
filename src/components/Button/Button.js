import React from 'react';
import {TheButton} from './Button.styles';

const Button = ({buttonName, isSubmit, isDisabled, onButtonClicked}) => {
    return(
        <TheButton
            onClick={(e) => onButtonClicked ? onButtonClicked(e) : null}
            type={ isSubmit ? 'submit' : 'button' }
            disabled={ isDisabled }
        >
            {buttonName}
        </TheButton>
    );
}

export default Button;
