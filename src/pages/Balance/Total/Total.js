import React from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
    MovementsColumnData,
    LastMovements
} from '../../../components';
//Styles
import {BalanceTotalContent, MovementsWrapper} from './Total.styles';
//Mock
import totalMovements from '../../../mocks/balance/totalMovements.json';
import totalDetailedMovements from '../../../mocks/balance/totalDetailedMovements.json';

const BalanceTotal = () => {
    const tableHeadings = ['Fecha', 'Liquidación Bruta', 'Descuentos', 'Liquidación Neta', 'Banco', '']
    return(
        <BalanceTotalContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large"/>}
                title="Resumen"
                description="Detalle de todos los movimientos registrados"
                search={true}
            />
            <MovementsWrapper>
                <MovementsColumnData title="Conciliación de Balances" subtitle="Detalle de movimientos" movements={totalMovements} />
                <LastMovements title="Últimos Movimientos" subtitle="Detalle de movimientos" headings={tableHeadings} items={totalDetailedMovements} />
            </MovementsWrapper>
        </BalanceTotalContent>
    );
}

export default BalanceTotal;
