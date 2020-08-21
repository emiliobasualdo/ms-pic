import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PeopleIcon from '@material-ui/icons/People';

const Current = () => {
    return(
        <TitleCard
            icon={<PeopleIcon fontSize="large"/>}
            title="Detalle de Clientes Actuales"
            diary="Diaria"
            weekly="Semanal"
            monthly="Mensual"
        />
    );
}

export default Current;