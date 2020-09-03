import React from 'react';
import Button from '../Button/Button';
import {Link} from '@reach/router';
import {RechargesQuantityContainer} from './SquareMetabaseGraphic.styles';

const SquareMetabaseGraphic = ({width, children, link}) => {
    return(
        <RechargesQuantityContainer style={{width: width}}>
            {children}
            <Link to={link}><Button buttonName="Más Detalles"/></Link>
        </RechargesQuantityContainer>
    );
}

export default SquareMetabaseGraphic;