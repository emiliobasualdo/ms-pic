import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {ConsumptionsBusinessContainer} from "./Consumptions.styles";

const Consumptions = () => {
    return(
        <ConsumptionsBusinessContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
                title="Análisis de consumos"
                description="Principales indicadores"
                item1="Diaria"
                item2="Semanal"
                item3="Mensual"
            />
        </ConsumptionsBusinessContainer>
    );
}

export default Consumptions;
