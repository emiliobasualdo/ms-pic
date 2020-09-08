import React, {useState} from 'react';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
//Components
import {
    TitleCard,
    Button,
    LastMovements
} from '../../../components';
//Styles
import {BalanceSettlementsContent} from './Settlements.styles';
import ProfileForm from "../../../components/ProfileForm/ProfileForm";
//Mock
import balanceLiqForm from '../../../mocks/balance/balanceLiqForm.json';
import balanceLiqMovements from '../../../mocks/balance/balanceLiqMovements.json';

const BalanceSettlements = () => {
    const tableHeadings = ['Fecha', 'Banco Pagador', 'Liquidación', 'Cuit', 'Comercio', 'Cupones', 'Importe Bruto', 'Descuentos', 'Total Neto', '']
    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        console.log('BUSCAR');
        setActionTrigger(new Event('submit'));
    }

    return(
        <BalanceSettlementsContent>
            <TitleCard
                icon={<LibraryBooksIcon fontSize="large" />}
                title="Liquidaciones"
                description="Detalle de todos los movimientos registrados"
                search={true}
            />
            <ProfileForm formContent={balanceLiqForm} triggered={actionTrigger}/>
            <Button buttonName="Buscar" onButtonClicked={() => handleClick()}/>
            <LastMovements title="Movimientos" headings={tableHeadings} items={balanceLiqMovements}/>
        </BalanceSettlementsContent>
    );
}

export default BalanceSettlements;