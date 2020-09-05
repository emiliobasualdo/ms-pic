import React from 'react';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import traditionalBusinessData from '../../../mocks/business/traditional/traditionalBusiness.json';
import greenCircularProgress from '../../../mocks/business/traditional/greenCircularProgress.json';
import customersConsumptions from '../../../mocks/business/traditional/customersConsumptions.json';
import volumeRecharges from '../../../mocks/business/traditional/volumeRecharges.json';
import {
    Card,
    CircularProgressContainer,
    CircularProgressCard,
    SimpleTable,
    SquareMetabaseGraphic,
    MetabaseGraph
} from '../../../components/';
import {
    TraditionalBusinessContainer,
    CircularGraphicsContainer,
    VerticalContainer,
    HorizontalContainer,
    LastContainer
} from './Traditional.styles';

const Traditional = () => {
    return(
        <TraditionalBusinessContainer>
            {traditionalBusinessData.map((item, index) => {
                return(
                    <Card
                        key={index}
                        icon={<PaymentOutlinedIcon fontSize="large"/>}
                        header={item.header}
                        paragraph={item.paragraph}
                        diary={item.diary}
                        weekly={item.weekly}
                        monthly={item.monthly}
                        clientsAmmount={item.clientsAmmount}
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
                        CircularProgressCardTitle="Rango de Consumo por clientes"
                        height="12rem"
                    >
                        {
                            customersConsumptions.map((circle, index) => {
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
                header4="Tickets"
                header5="%"
                header6="V. Consumo"
                header7="%"
                header8="Tickets C."
                header9="%"
                header10="Consumo C."
                header11="%"
                header12="Tickets D."
                header13="%"
                header14="Consumo D."
                header15="%"
            />
            <LastContainer>
                <SquareMetabaseGraphic width="28%" link="/zonas/total">
                    <MetabaseGraph
                        title={"Promedio cant. consumo por zona"}
                        graphId={"cb694264-f56b-4f95-8baf-06d8001f0a8a"}
                        width={"100%"}
                        height={"85%"}
                    />
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="28%" link="/cupones/resumen">
                    <MetabaseGraph
                        title={"Volumen consumo por zona"}
                        graphId={"5e1e18e2-c848-43f7-975e-e59ed344ca5a"}
                        width={"100%"}
                        height={"85%"}
                    />
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="28%" link="/zonas/total">
                    <MetabaseGraph
                        title={"Porcentaje de consumo por marca"}
                        graphId={"1a64e686-3688-41a6-a8a2-c0d40f0f13c2"}
                        width={"100%"}
                        height={"85%"}
                    />
                </SquareMetabaseGraphic>
            </LastContainer>
        </TraditionalBusinessContainer>
    );
}

export default Traditional;