import React from 'react';
import {Butt} from './Button2.styles';

const Button2 = ({name, active, onClick}) => {
    return(
        <Butt active={active} onClick={onClick}>{name}</Butt>
    );
}

export default Button2;