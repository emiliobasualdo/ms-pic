import React from 'react';
import Button from '../Button/Button';
import {Link} from '@reach/router';
import {RechargesQuantityContainer} from './SquareMetabaseGraphic.styles';

const SquareMetabaseGraphic = ({width, height, children, link}) => {
    return(
        <RechargesQuantityContainer style={{width: width, height: height}}>
            {children}
            <Link to={link}><Button buttonName="Más Detalles"/></Link>
        </RechargesQuantityContainer>
    );
}

export default SquareMetabaseGraphic;