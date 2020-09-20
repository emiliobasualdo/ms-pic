import React, {useState} from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import cashFlowTable from '../../../mocks/balance/cashFlowTable.json';
import movementsDetailForm from '../../../mocks/balance/movementsDetailForm.json';
//Components
import {
    Table,
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

    const cashFlowHeaders = [
        "Banco",
        "Fecha",
        "01/05",
        "02/05",
        "03/05",
        "04/05",
        "05/05",
        "06/05",
        "07/05",
        "08/05",
        "09/05",
        "10/05"
    ]

    return(
        <BalanceScheduleContent>
            <TitleCard
                icon={<AccountBalanceIcon fontSize="large"/>}
                title="Agenda de Pagos"
                description="Acreditaciones proyectadas"
                search={true}
            />
            <div style={{marginBottom: '2rem'}}>
                <TitleCard
                    title="Bitácora de Segmentación"
                    description="Detalle de movimientos"
                    action="Generar consulta"
                    borderLine={true}
                    onClick={() => handleClick()}
                />
                <ProfileForm formContent={movementsDetailForm} triggered={actionTrigger}/>
            </div>
            <Table
                title="CashFlow"
                headers={cashFlowHeaders}
                rows={cashFlowTable}
            />
        </BalanceScheduleContent>
    );
}

export default BalanceSchedule;
