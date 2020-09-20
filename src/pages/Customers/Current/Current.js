import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
//Mocks
import BarGraphsData from '../../../mocks/customers/barGraphs.json';
import GenresData from '../../../mocks/customers/genre.json';
import AgeRangeData from '../../../mocks/customers/ageRange.json';
import GeographicZonesData from '../../../mocks/customers/geographicZones.json';
import MaleGenreData from '../../../mocks/customers/maleGenre.json';
import FemaleGenreData from '../../../mocks/customers/femaleGenre.json';
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
import{
    CustomersCurrentContent,
    BarGraphCardsContainer,
    CircularProgressCardsContainer
} from './Current.styles';

const Current = () => {
    return(
        <CustomersCurrentContent>
            <TitleCard
                icon={<PeopleIcon fontSize="large"/>}
                title="Detalle de Clientes Actuales"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
                borderLine={true}
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
                                    textColor={genre.color}
                                    pathColor={genre.color}
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
        </CustomersCurrentContent>
    );
}

export default Current;
