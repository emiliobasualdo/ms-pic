import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceTotalContent} from './Total.styles';

const BalanceTotal = () => {
    return(
        <BalanceTotalContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large"/>}
                title="Resumen"
                description="Detalle de todos los movimientos registrados"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceTotalContent>
    );
}

export default BalanceTotal;