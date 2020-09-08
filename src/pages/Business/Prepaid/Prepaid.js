import React from 'react';
import prepaidBusinessData from '../../../mocks/business/prepaid/prepaidBusiness.json';
import customersRecharges from '../../../mocks/business/prepaid/customersRecharges.json';
import volumeRecharges from '../../../mocks/business/prepaid/volumeRecharges.json';
import greenCircularProgress from '../../../mocks/business/prepaid/greenCircularProgress.json';
import tableData from '../../../mocks/business/prepaid/tableData.json';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import {
    Card,
    CircularProgressContainer,
    CircularProgressCard,
    Table,
    MetabaseGraph
} from '../../../components/';
import {
    PrepaidBusinessContainer,
    CircularGraphicsContainer,
    VerticalContainer,
    HorizontalContainer,
    LastContainer
} from './Prepaid.styles';

const Prepaid = () => {

    const tableHeaders = [
        "Rango",
        "Clientes",
        "%",
        "Transacciones",
        "%",
        "V. Operado",
        "%",
        "Tickets",
        "%",
        "V. Consumo",
        "%",
        "Recargas",
        "%",
        "V.Recargas",
        "%"
    ]
    
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
            <Table
                headers={tableHeaders}
                rows={tableData}
            />
            <LastContainer>
                <MetabaseGraph
                    title={"Cantidad de recargas por zona geográfica"}
                    graphId={"749c8028-a099-4adf-a838-eda4eb7d004e"}
                    width={"100%"} height={"100%"}
                    dashboard={true}
                />
            </LastContainer>
        </PrepaidBusinessContainer>
    )
}

export default Prepaid;