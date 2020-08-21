import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const New = () => {
    return(
        <TitleCard
            icon={<PersonAddIcon fontSize="large"/>}
            title="Detalle de Clientes Nuevos"
            diary="Diaria"
            weekly="Semanal"
            monthly="Mensual"
        />
    );
}

export default New;