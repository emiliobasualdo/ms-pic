import React from 'react';
import { ServicesTotalContainer } from "./Total.styles";
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import {HorizontalData, ServiceDetail, TitleCard} from "../../../components";
import totalMovements from '../../../mocks/services/totalMovements.json';
import energyMovements from '../../../mocks/services/energyMovements.json';
import gasMovements from '../../../mocks/services/gasMovements.json';
import taxesMovements from '../../../mocks/services/taxesMovements.json';

const ServicesTotal = () => {
    const tableHeadings = ['Servicios', 'Empresa', 'Clientes', 'Monto', 'Transacciones', 'Ticket Promedio', 'Perfiles'];
    return (
        <ServicesTotalContainer>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large"/>}
                title="Servicios"
                description="Total movimientos"
            />
            <HorizontalData data={totalMovements}/>
            <ServiceDetail title="Detalle de Servicios básicos" headings={tableHeadings} items={ energyMovements } />
            <ServiceDetail title="Detalle de Servicios básicos" headings={tableHeadings} items={ gasMovements } />
            <ServiceDetail title="Detalle de Servicios básicos" headings={tableHeadings} items={ taxesMovements } />
        </ServicesTotalContainer>
    )
}

export default ServicesTotal;
