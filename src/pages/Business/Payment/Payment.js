import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import DvrIcon from '@material-ui/icons/Dvr';
import {PaymentBusinessContainer} from "./Payment.styles";

const Payment = () => {
    return (
        <PaymentBusinessContainer>
            <TitleCard
                icon={<DvrIcon/>}
                title="Medios de Cobro"
                description="Principales indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
        </PaymentBusinessContainer>
    );
}

export default Payment;
