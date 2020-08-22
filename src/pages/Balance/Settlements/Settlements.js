import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceSettlementsContent} from './Settlements.styles';

const BalanceSettlements = () => {
    return(
        <BalanceSettlementsContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large"/>}
                title="Resumen"
                description="Detalle de todos los movimientos registrados"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceSettlementsContent>
    );
}

export default BalanceSettlements;