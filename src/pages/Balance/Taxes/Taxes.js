import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceTaxesContent} from './Taxes.styles';

const BalanceTaxes = () => {
    return(
        <BalanceTaxesContent>
            <TitleCard
                icon={<MonetizationOnIcon fontSize="large"/>}
                title="Impuestos"
                description="Posición consolidada"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceTaxesContent>
    );
}

export default BalanceTaxes;