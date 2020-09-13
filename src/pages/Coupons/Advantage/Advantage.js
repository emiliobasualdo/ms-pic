import React, {useState} from 'react';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import advantageForm from '../../../mocks/coupons/advantageForm.json';
import {CouponsAdvantageContent} from './Advantage.styles';
import couponDetails from '../../../mocks/coupons/couponDetails.json';

//Components
import {
    TitleCard,
    ProfileForm,
    TableWithActions,
    Table2
} from '../../../components';

const CouponsAdvantage = () => {
    const [actionTrigger, setActionTrigger] = useState(null);
    const tableHeadings = ['Operación', 'Presentación', 'Pago', 'Producto', 'Tipo', 'Liquidación', 'Cupón', 'I. Bruto', 'Descuentos', 'I. Neto', 'Selección']

    const handleClick = () => {
        setActionTrigger(new Event('submit'));
    }

    return (
        <CouponsAdvantageContent>
            <div style={{marginBottom: '2rem'}}>
                <TitleCard
                    icon={<ConfirmationNumberIcon fontSize="large"/>}
                    title="Adelantamiento de Cupones"
                    description="Selecciones las variables"
                    action="Eventual"
                    onClick={() => handleClick()}
                />
                <ProfileForm formContent={advantageForm} triggered={actionTrigger}/>
            </div>
            <TableWithActions header="Resultado del adelantamiento" subHeader="Mejor Oferta"/>
            <Table2 title="Detalle de Cupones" headings={ tableHeadings } items={ couponDetails } buttonName="Detalle"/>
        </CouponsAdvantageContent>
    );
}

export default CouponsAdvantage;
