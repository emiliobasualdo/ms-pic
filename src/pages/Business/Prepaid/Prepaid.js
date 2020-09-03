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
    SquareMetabaseGraphic,
    SquareProgressCircular
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
                <SquareMetabaseGraphic width="28%" link="/zonas/total">
                    <iframe
                        title="Cantidad de recargas por zona geográfica"
                        src="http://metabase.piux.com.ar/public/question/a0e33560-6e70-43f0-805d-ee929c4a9549"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="28%" link="/cupones/resumen">
                    <iframe
                        title="Volumen de recargas por zona"
                        src="http://metabase.piux.com.ar/public/question/bcb5939f-17ae-4879-9ca8-e301523a93ff"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="28%" link="/cupones/resumen">
                    <iframe
                        src="http://metabase.piux.com.ar/public/question/095fa0ae-5983-4c10-af6d-f14220c387c8"
                        frameborder="0"
                        width="100%"
                        height="40%"
                        allowtransparency
                    ></iframe>
                    <iframe
                        src="http://metabase.piux.com.ar/public/question/e29ddc6f-5c50-4804-bb2d-df6d077704db"
                        frameborder="0"
                        width="100%"
                        height="40%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                {/* <SquareProgressCircular width="28%" title="Origen de Recargas">
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
                </SquareProgressCircular> */}
            </LastContainer>
        </PrepaidBusinessContainer>
    )
}

export default Prepaid;
