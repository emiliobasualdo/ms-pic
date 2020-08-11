import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {RechargesBusinessContainer} from './Recharges.styles';

const Recharges = () => {
    return (
        <RechargesBusinessContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
                title="Análisis de recargas"
                description="Principales indicadores"
                item1="Diaria"
                item2="Semanal"
                item3="Mensual"
            />
        </RechargesBusinessContainer>
    );
}

export default Recharges;