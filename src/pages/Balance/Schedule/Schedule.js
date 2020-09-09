import React, {useState} from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import movementsDetailForm from '../../../mocks/balance/movementsDetailForm.json';
//Components
import {
    TitleCard,
    ProfileForm
} from '../../../components';
//Styles
import {BalanceScheduleContent} from './Schedule.styles';

const BalanceSchedule = () => {

    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    return(
        <BalanceScheduleContent>
            <TitleCard
                icon={<AccountBalanceIcon fontSize="large"/>}
                title="Agenda de Pagos"
                description="Acreditaciones proyectadas"
                search={true}
            />
            <div>
                <TitleCard
                    title="Bitácora de Segmentación"
                    description="Detalle de movimientos"
                    action="Generar consulta"
                    onClick={() => handleClick()}
                />
                <ProfileForm formContent={movementsDetailForm} triggered={actionTrigger}/>
            </div>
        </BalanceScheduleContent>
    );
}

export default BalanceSchedule;