import React from 'react';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
//Mocks
import BarGraphsData from '../../../mocks/customers/barGraphs.json';
import GenresData from '../../../mocks/customers/genre.json';
import AgeRangeData from '../../../mocks/customers/ageRange.json';
import GeographicZonesData from '../../../mocks/customers/geographicZones.json';
import MaleGenreData from '../../../mocks/customers/maleGenre.json';
import FemaleGenreData from '../../../mocks/customers/femaleGenre.json';
//Components
import {
    Button,
    TitleCard,
    BarGraphCard,
    SquareProgressCircular,
    CircularProgressContainer,
    TwoCircularProgressCard,
    LargeCircularProgressCard
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
            <LargeCircularProgressCard title="Género Femenino">
                {
                    FemaleGenreData.map((circle, index) => {
                        return(
                            <CircularProgressContainer
                                key={index}
                                percentage={circle.percentage}
                                progressDescription={circle.description}
                                width="8%"
                                height="10%"
                                textColor="salmon"
                                pathColor="salmon"
                                margin="1rem 3rem"
                            />
                        )
                    })
                }
            </LargeCircularProgressCard>
            <LargeCircularProgressCard title="Género Masculino">
                {
                    MaleGenreData.map((circle, index) => {
                        return(
                            <CircularProgressContainer
                                key={index}
                                percentage={circle.percentage}
                                progressDescription={circle.description}
                                width="8%"
                                height="10%"
                                textColor="blue"
                                pathColor="blue"
                                margin="1rem 3rem"
                            />
                        )
                    })
                }
            </LargeCircularProgressCard>
        </CustomersTotalContent>
    );
}

export default CustomersTotal;