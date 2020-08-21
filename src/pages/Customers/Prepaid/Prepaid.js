import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';

const CustomersPrepaid = () => {
    return(
        <TitleCard
            icon={<PaymentOutlinedIcon fontSize="large"/>}
            title="Detalle de Clientes Prepagos"
            diary="Diaria"
            weekly="Semanal"
            monthly="Mensual"
        />
    );
}

export default CustomersPrepaid;