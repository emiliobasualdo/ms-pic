import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
//Components
import {
    TitleCard,
    LastMovements
} from '../../../components';
//Styles
import {BalanceConciliationContent} from './Conciliation.styles';
//Mock
import liqUnification from '../../../mocks/balance/liqUnification.json';

const BalanceConciliation = () => {
    const tableHeadings = ['Fecha', 'Liquidación', 'Banco Pagador', 'Liquidación Bruta', 'Retenciones', 'Desc. Bancario', 'Liquidación Neta', 'Up Load Mov. Bancario', 'Diferencia']
    return(
        <BalanceConciliationContent>
            <TitleCard
                icon={<AccountBalanceIcon fontSize="large"/>}
                title="Conciliaciones"
                description="Validación de Liquidaciones"
                search={true}
            />
            <LastMovements title="Unificación de Liquidaciones" headings={tableHeadings} items={liqUnification} difference={true} />
        </BalanceConciliationContent>
    );
}

export default BalanceConciliation;
