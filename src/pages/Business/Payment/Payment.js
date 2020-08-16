import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import DvrIcon from '@material-ui/icons/Dvr';
import {PaymentBusinessContainer} from "./Payment.styles";
import { PaymentBusinessDataContainer } from "./Payment.styles";
import paymentsBusiness from '../../../mocks/payments/paymentsBusiness.json';
import LargeColumnData from "../../../components/LargeColumnData/LargeColumnData";
import CropFreeOutlinedIcon from "@material-ui/icons/CropFreeOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import CameraRearOutlinedIcon from '@material-ui/icons/CameraRearOutlined';


const Payment = () => {
    const icons = {
        icon1: <CropFreeOutlinedIcon fontSize="large"/>,
        icon2: <AddShoppingCartOutlinedIcon fontSize="large" />,
        icon3: <InsertDriveFileOutlinedIcon fontSize="large" />,
        icon4: <CameraRearOutlinedIcon fontSize="large" />
    }
    return (
        <PaymentBusinessContainer>
            <TitleCard
                icon={<DvrIcon fontSize="large"/>}
                title="Medios de Cobro"
                description="Principales indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
            <PaymentBusinessDataContainer>
                {
                    paymentsBusiness.map((item, index) => {
                        return(
                            <LargeColumnData
                                key={index}
                                icon={icons[`icon${index + 1}`]}
                                header={item.header}
                                subheader={item.subheader}
                                commerceText={item.commerceText}
                                commerceAmmount={item.commerceAmmount}
                                clientsText={item.clientsText}
                                clientsAmmount={item.clientsAmmount}
                                volumeOpText={item.volumeOpText}
                                volumeOpAmmount={`$ `+ item.volumeOpAmmount}
                                volumeCoText={item.volumeCoText}
                                volumeCoAmmount={item.volumeCoAmmount}
                                volumeReText={item.volumeReText}
                                volumeReAmmount={`$ `+ item.volumeReAmmount}
                                transactionsText={item.transactionsText}
                                transactionsAmmount={`$ `+ item.transactionsAmmount}
                                vFloatText={item.vFloatText}
                                vFloatAmmount={item.vFloatAmmount}
                                ticketsText={item.ticketsText}
                                ticketsAmmount={item.ticketsAmmount}
                                averageTxtText={item.averageTxtText}
                                averageTxtAmmount={item.averageTxtAmmount}
                                averageVoText={item.averageVoText}
                                averageVoAmmount={item.averageVoAmmount}
                                averageTicketsText={item.averageTicketsText}
                                averageTicketsAmmount={item.averageTicketsAmmount}
                                averageConsumptionText={item.averageConsumptionText}
                                averageConsumptionAmmount={item.averageConsumptionAmmount}
                                averageTxtRText={item.averageTxtRText}
                                averageTxtRAmmount={item.averageTxtRAmmount}
                                averageRechargeText={item.averageRechargeText}
                                averageRechargeAmmount={item.averageRechargeAmmount}
                            />
                        )
                    })
                }
            </PaymentBusinessDataContainer>
        </PaymentBusinessContainer>
    );
}

export default Payment;
