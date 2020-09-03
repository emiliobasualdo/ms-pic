import React from 'react';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
//Mocks
import BarGraphsData from '../../../mocks/customers/barGraphs.json';
//Components
import {
    TitleCard,
    BarGraphCard,
    SquareMetabaseGraphic
} from '../../../components';
//Styles
import {
    CustomersTotalContent,
    BarGraphCardsContainer,
    CircularProgressCardsContainer
} from './Total.styles';

const CustomersTotal = () => {
    return(
        <CustomersTotalContent>
            <TitleCard
                icon={<LocalAtmIcon fontSize="large"/>}
                title="Detalle de Cartera"
                description="Apertura por Clientes"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
            <BarGraphCardsContainer>
                {
                    BarGraphsData.map((card, index) => {
                        return(
                            <BarGraphCard
                                key={index}
                                barWidth="100"
                                barHeight="50"
                                number={card.number}
                                description={card.description}
                            />
                        )
                    })
                }
            </BarGraphCardsContainer>
            <CircularProgressCardsContainer>
                <SquareMetabaseGraphic width="25%" height="auto" link="">
                    <iframe
                        title="Porcentaje de clientes por género"
                        src="http://metabase.piux.com.ar/public/question/6b6e3463-5aea-4b6b-98db-99d81a4162ab"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="40%" height="auto" link="">
                    <iframe
                        title="Promedio de clientes por zona"
                        src="http://metabase.piux.com.ar/public/question/3dc554a8-60b2-4a41-91b1-e9125606f7e7"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="25%" height="auto" link="">
                    <iframe
                        title="Promedio de clientes por edad"
                        src="http://metabase.piux.com.ar/public/question/ba7fa3ce-1bf5-4a74-a43f-55694432ff91"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
            </CircularProgressCardsContainer>
            <CircularProgressCardsContainer>
                <SquareMetabaseGraphic width="47%" height="auto" link="">
                    <iframe
                        title="Promedio de mujeres por zona"
                        src="http://metabase.piux.com.ar/public/question/2292f1bf-e254-4510-b334-ba71d08175b6"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="47%" height="auto" link="">
                    <iframe
                        title="Promedio de mujeres por edad"
                        src="http://metabase.piux.com.ar/public/question/3a4f5793-8faf-4f88-9e2f-05f13aab77c1"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
            </CircularProgressCardsContainer>
            <CircularProgressCardsContainer>
                <SquareMetabaseGraphic width="47%" height="auto" link="">
                        <iframe
                            title="Promedio de hombres por zona"
                            src="http://metabase.piux.com.ar/public/question/684a788d-a1eb-4f16-9338-77deef252ce5"
                            frameborder="0"
                            width="100%"
                            height="85%"
                            allowtransparency
                        ></iframe>
                </SquareMetabaseGraphic>
                <SquareMetabaseGraphic width="47%" height="auto" link="">
                    <iframe
                        title="Promedio de hombres por edad"
                        src="http://metabase.piux.com.ar/public/question/e92643fc-40e3-4b70-aaaa-ec3f8879b856"
                        frameborder="0"
                        width="100%"
                        height="85%"
                        allowtransparency
                    ></iframe>
                </SquareMetabaseGraphic>
            </CircularProgressCardsContainer>
        </CustomersTotalContent>
    );
}

export default CustomersTotal;