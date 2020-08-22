import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {BalanceScheduleContent} from './Schedule.styles';

const BalanceSchedule = () => {
    return(
        <BalanceScheduleContent>
            <TitleCard
                icon={<AccountBalanceIcon fontSize="large"/>}
                title="Agenda de Pagos"
                description="Acreditaciones proyectadas"
                diary="Desde"
                weekly="Hasta"
                monthly=""
            />
        </BalanceScheduleContent>
    );
}

export default BalanceSchedule;