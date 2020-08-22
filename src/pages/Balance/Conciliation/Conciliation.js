import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceConciliationContent} from './Conciliation.styles';

const BalanceConciliation = () => {
    return(
        <BalanceConciliationContent>
            <TitleCard
                icon={<AccountBalanceIcon fontSize="large"/>}
                title="Conciliaciones"
                description="Validación de Liquidaciones"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceConciliationContent>
    );
}

export default BalanceConciliation;