import React from 'react';
import prepaidBusinessData from '../../../mocks/business/prepaid/prepaidBusiness.json';
import customersRecharges from '../../../mocks/business/prepaid/customersRecharges.json';
import volumeRecharges from '../../../mocks/business/prepaid/volumeRecharges.json';
import greenCircularProgress from '../../../mocks/business/prepaid/greenCircularProgress.json';
import rechargesOriginData from '../../../mocks/business/prepaid/rechargesOrigin.json';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {
    Card,
    CircularProgressContainer,
    CircularProgressCard,
    SimpleTable,
    SquareProgressBars,
    SquareAreaChart,
    SquarePayments
} from '../../../components/';
import {
    PrepaidBusinessContainer,
    CircularGraphicsContainer,
    VerticalContainer,
    HorizontalContainer,
    LastContainer
} from './Prepaid.styles';

const Prepaid = () => {
    return(
        <PrepaidBusinessContainer>
            {
                prepaidBusinessData.map((item, index) => {
                return (
                    <Card
                        key={index}
                        icon={<PaymentOutlinedIcon fontSize="large"/>}
                        header={item.header}
                        paragraph={item.paragraph}
                        diary={item.diary}
                        weekly={item.weekly}
                        monthly={item.monthly}
                        clientsAmmount={item.clientsAmmount}
                        clientsText={item.clientsText}
                        volumeOpAmmount={item.volumeOpAmmount}
                        volumeOpText={item.volumeOpText}
                        volumeCoAmmount={item.volumeCoAmmount}
                        volumeCoText={item.volumeCoText}
                        volumeReAmmount={item.volumeReAmmount}
                        volumeReText={item.volumeReText}
                        transactionsAmmount={item.transactionsAmmount}
                        transactionsText={item.transactionsText}
                        ticketsAmmount={item.ticketsAmmount}
                        ticketsText={item.ticketsText}
                    />
                )
            })}
            <CircularGraphicsContainer>
                <VerticalContainer>
                    {
                        greenCircularProgress.map((circle, index) => {
                            return(
                                <CircularProgressContainer
                                    key={index}
                                    percentage={circle.percentage}
                                    progressDescription={circle.description}
                                    width="40%"
                                    height="100%"
                                    textColor="rgb(90, 191, 141)"
                                    pathColor="rgb(90, 191, 141)"
                                />
                            )
                        })
                    }
                </VerticalContainer>
                <HorizontalContainer>
                    <CircularProgressCard
                        CircularProgressCardTitle="Rango de Recargas por clientes"
                        height="12rem"
                        >
                            {
                                customersRecharges.map((circle, index) => {
                                    return(
                                        <CircularProgressContainer
                                            key={index}
                                            percentage={circle.percentage}
                                            progressDescription={circle.description}
                                            width="60%"
                                            height="100%"
                                            textColor="rgb(238, 134, 71)"
                                            pathColor="rgb(238, 134, 71)"
                                        />
                                    )
                                })
                            }
                    </CircularProgressCard>
                    <CircularProgressCard
                        CircularProgressCardTitle="Rango de Recargas por Volumen Operado"
                        height="12rem"
                    >
                        {
                            volumeRecharges.map((circle, index) => {
                                return(
                                    <CircularProgressContainer
                                        key={index}
                                        percentage={circle.percentage}
                                        progressDescription={circle.description}
                                        width="60%"
                                        height="100%"
                                        textColor="rgb(238, 134, 71)"
                                        pathColor="rgb(238, 134, 71)"
                                    />
                                )
                            })
                        }
                    </CircularProgressCard>
                </HorizontalContainer>
            </CircularGraphicsContainer>
            <SimpleTable
                header1="Rango"
                header2="Clientes"
                header3="%"
                header4="Transacciones"
                header5="%"
                header6="V. Operado"
                header7="%"
                header8="Tickets"
                header9="%"
                header10="V. Consumo"
                header11="%"
                header12="Recargas"
                header13="%"
                header14="V.Recargas"
                header15="%"
                
            />
            <LastContainer>
                <SquareProgressBars width="28%" title="Cantidad de Recargas"/>
                <SquareAreaChart width="28%" title="Transacciones de Recargas"/>
                <SquarePayments width="28%" title="Origen de Recargas">
                    {
                        rechargesOriginData.map((circle, index) => {
                            return(
                                <CircularProgressContainer
                                    key={index}
                                    percentage={circle.percentage}
                                    progressDescription={circle.description}
                                    width="30%"
                                    height="60%"
                                    textColor="rgb(232, 51, 35)"
                                    pathColor="rgb(232, 51, 35)"
                                />
                            )
                        })
                    }
                </SquarePayments>
            </LastContainer>
        </PrepaidBusinessContainer>
    )
}

export default Prepaid;
