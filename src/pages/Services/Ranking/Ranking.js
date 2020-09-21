import React from 'react';
import {Table2, TitleCard} from "../../../components";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import rankings from '../../../mocks/services/rankings.json';

const ServicesRanking = () => {
    const tableHeadings = ['Servicios', 'Empresa', 'Clientes', 'Monto', 'Transacciones', 'Ticket Promedio', 'Perfiles']

    return (
        <>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large"/>}
                title="Ranking de Servicios"
                description="Servicios pagados por medio de su aplicación"
                search={true}
            />
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={rankings}
                buttonName="Ver"
            />
        </>
    )
}

export default ServicesRanking;
