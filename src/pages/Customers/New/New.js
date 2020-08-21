import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
//Mocks
import BarGraphsData from '../../../mocks/customers/new/barGraphs.json';
import GenresData from '../../../mocks/customers/new/genre.json';
import AgeRangeData from '../../../mocks/customers/new/ageRange.json';
import GeographicZonesData from '../../../mocks/customers/new/geographicZones.json';
import MaleGenreData from '../../../mocks/customers/new/maleGenre.json';
import FemaleGenreData from '../../../mocks/customers/new/femaleGenre.json';
//Components
import{
    TitleCard,
    BarGraphCard,
    TwoCircularProgressCard,
    Button,
    CircularProgressContainer,
    SquareProgressCircular,
    LargeCircularProgressCard
} from '../../../components';
//Styles
import {
    CustomersNewContent,
    BarGraphCardsContainer,
    CircularProgressCardsContainer
} from './New.styles';

const New = () => {
    return(
        <CustomersNewContent>
            <TitleCard
                icon={<PersonAddIcon fontSize="large"/>}
                title="Detalle de Clientes Nuevos"
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
                <TwoCircularProgressCard>
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
        </CustomersNewContent>
    );
}

export default New;