import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const CustomersTotal = () => {
    return(
        <TitleCard
            icon={<LocalAtmIcon fontSize="large"/>}
            title="Detalle de Cartera"
            description="Apertura por Clientes"
            diary="Diaria"
            weekly="Semanal"
            monthly="Mensual"
        />
    );
}

export default CustomersTotal;