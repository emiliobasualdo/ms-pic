import React from 'react';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
//Mocks
import BarGraphsData from '../../../mocks/customers/barGraphs.json';
//Components
import {
    TitleCard,
    BarGraphCard,
    MetabaseGraph
} from '../../../components';
//Styles
import {
    CustomersTotalContent,
    BarGraphCardsContainer,
    LastContainer
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
            <LastContainer>
                <MetabaseGraph
                    title={"Reporte total de clientes"}
                    graphId={"36049fff-e241-4d00-ab7b-e240fd00ca9a"}
                    width={"100%"} height={"auto"}
                    dashboard={true}
                />
            </LastContainer>
        </CustomersTotalContent>
    );
}

export default CustomersTotal;
