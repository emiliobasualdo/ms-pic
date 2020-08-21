import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import BarGraphCard from '../../../components/BarGraphCard/BarGraphCard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import BarGraphsData from '../../../mocks/customers/total/barGraphs.json';
import {BarGraphCardsContainer} from './Total.styles';

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
        </>
    );
}

export default CustomersTotal;