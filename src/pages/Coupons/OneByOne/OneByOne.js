import React, {useState} from 'react';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import movementsTable from '../../../mocks/coupons/movementsTable.json';
import oneByOneDetailForm from '../../../mocks/coupons/oneByOneDetailForm.json';
import {CouponsOneByOneContent} from './OneByOne.styles';
//Components
import {
    Table,
    TitleCard,
    ProfileForm
} from '../../../components';

const CouponsOnebyOne = () => {

    const [actionTrigger, setActionTrigger] = useState(null);

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    const movementsTableHeader = [
        "Operación",
        "Presentación",
        "Pago",
        "Producto",
        "Tipo",
        "Liquidación",
        "Cupón",
        "I. Bruto",
        "Descuentos",
        "I. Neto"
    ]

    return (
        <CouponsOneByOneContent>
            <div style={{marginBottom: '2rem'}}>
                <TitleCard
                    icon={<ConfirmationNumberIcon fontSize="large"/>}
                    title="Uno x Uno"
                    description="Detalle de cada compra"
                    search={true}
                />
                <ProfileForm formContent={oneByOneDetailForm} triggered={actionTrigger}/>
            </div>
            <Table
                title="Movimientos"
                headers={movementsTableHeader}
                rows={movementsTable}
            />
        </CouponsOneByOneContent>
    );
}

export default CouponsOnebyOne;