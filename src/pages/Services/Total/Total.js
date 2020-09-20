import React from 'react';
import { ServicesTotalContainer } from "./Total.styles";
import BlurOnRoundedIcon from '@material-ui/icons/BlurOnRounded';
import {HorizontalData, ServiceDetail, TitleCard} from "../../../components";

const ServicesTotal = () => {
    return (
        <ServicesTotalContainer>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large"/>}
                title="Servicios"
                description="Total movimientos"
            />
            <HorizontalData />
            <ServiceDetail />
        </ServicesTotalContainer>
    )
}

export default ServicesTotal;
