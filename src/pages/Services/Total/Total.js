import React from 'react';
import { ServicesTotalContainer } from "./Total.styles";
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import {HorizontalData, ServiceDetail, TitleCard} from "../../../components";
import energyMovements from '../../../mocks/services/energyMovements.json';
import gasMovements from '../../../mocks/services/gasMovements.json';
import taxesMovements from '../../../mocks/services/taxesMovements.json';

const ServicesTotal = () => {
    return (
        <ServicesTotalContainer>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large"/>}
                title="Servicios"
                description="Total movimientos"
            />
            <HorizontalData />
            <ServiceDetail title="Detalle de Servicios básicos" items={ energyMovements } />
            <ServiceDetail title="Detalle de Servicios básicos" items={ gasMovements } />
            <ServiceDetail title="Detalle de Servicios básicos" items={ taxesMovements } />
        </ServicesTotalContainer>
    )
}

export default ServicesTotal;
