import React from 'react';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BarGraphsData from '../../../mocks/customers/total/barGraphs.json';
import GenresData from '../../../mocks/customers/total/genre.json';
import AgeRangeData from '../../../mocks/customers/total/ageRange.json';
import GeographicZonesData from '../../../mocks/customers/total/geographicZones.json';
import {
    Button,
    TitleCard,
    BarGraphCard,
    SquareProgressCircular,
    CircularProgressContainer,
    TwoCircularProgressCard
} from '../../../components';
import {
    BarGraphCardsContainer,
    CircularProgressCardsContainer
} from './Total.styles';

const CustomersTotal = () => {
    return(
        <>
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
                <TwoCircularProgressCard title="Género">
                    {
                        GenresData.map((genre, index) => {
                            return(
                                <CircularProgressContainer
                                    key={index}
                                    percentage={genre.percentage}
                                    progressDescription={genre.description}
                                    width="35%"
                                    textColor="blue"
                                    pathColor="blue"
                                />
                            )
                        })
                    }
                    <Button buttonName="Más Detalles"/>
                </TwoCircularProgressCard>
                <SquareProgressCircular
                    width="28%"
                    title="Zonas Geográficas"
                    buttonName="Más Detalles"
                >
                    {
                        GeographicZonesData.map((circle, index) => {
                            return(
                                <CircularProgressContainer
                                    key={index}
                                    percentage={circle.percentage}
                                    progressDescription={circle.description}
                                    width="30%"
                                    height="60%"
                                    textColor="rgb(90, 191, 141)"
                                    pathColor="rgb(90, 191, 141)"
                                />
                            )
                        })
                    }
                </SquareProgressCircular>
                <SquareProgressCircular
                    width="28%"
                    title="Rango de Edad"
                    buttonName="Más Detalles"
                >
                    {
                        AgeRangeData.map((circle, index) => {
                            return(
                                <CircularProgressContainer
                                    key={index}
                                    percentage={circle.percentage}
                                    progressDescription={circle.description}
                                    width="30%"
                                    height="60%"
                                    textColor="rgb(90, 191, 141)"
                                    pathColor="rgb(90, 191, 141)"
                                />
                            )
                        })
                    }
                </SquareProgressCircular>
            </CircularProgressCardsContainer>
        </>
    );
}

export default CustomersTotal;