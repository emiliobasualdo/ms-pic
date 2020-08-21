import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';

const CustomersTraditional = () => {
    return(
        <TitleCard
            icon={<PaymentOutlinedIcon fontSize="large"/>}
            title="Detalle de Clientes Tradicionales"
            diary="Diaria"
            weekly="Semanal"
            monthly="Mensual"
        />
    );
}

export default CustomersTraditional;