import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {PaymentBusinessContainer} from "./Payment.styles";

const Payment = () => {
    return (
        <PaymentBusinessContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
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
