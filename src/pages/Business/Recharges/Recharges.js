import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import ColumnData from '../../../components/ColumnData/ColumnData';
import SquareData from '../../../components/SquareData/SquareData';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import rechargesAnalysisData from '../../../mocks/recharges/rechargesAnalysis.json';
import moneyFlowData from '../../../mocks/recharges/moneyFlow.json';
import {
    RechargesBusinessContainer,
    RechargesBusinessDataContainer,
    SquaredsContainer
} from './Recharges.styles';

const Recharges = () => {
    return(
        <RechargesBusinessContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
                title="Análisis de recargas"
                description="Principales indicadores"
                item1="Diaria"
                item2="Semanal"
                item3="Mensual"
            />
            <RechargesBusinessDataContainer>
                {
                    rechargesAnalysisData.map((item, index) => {
                        return(
                            <ColumnData
                                key={index}
                                clientsText={item.clientsText}
                                clientsAmmount={item.clientsAmmount}
                                volumeOpText={item.volumeOpText}
                                volumeOpAmmount={`$ `+ item.volumeOpAmmount}
                                volumeCoText={item.volumeCoText}
                                volumeReAmmount={`$ `+ item.volumeReAmmount}
                                volumeReText={item.volumeReText}
                                transactionsAmmount={`$ `+ item.transactionsAmmount}
                                transactionsText={item.transactionsText}
                                ticketsAmmount={item.ticketsAmmount}
                                ticketsText={item.ticketsText}
                                volumeAmmount={`$ `+ item.volumeAmmount}
                            />
                        )
                    })
                }
            </RechargesBusinessDataContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
                title="Flujo de Dinero"
                description="Generación de Recargas"
                item1="Diaria"
                item2="Semanal"
                item3="Mensual"
            />
            <SquaredsContainer>
                {
                    moneyFlowData.map((item, index) => {
                        return(
                            <SquareData
                                key={index}
                                title={item.title}

                                headerColumn1={item.header.column1}
                                headerColumn2={item.header.column2}
                                headerColumn3={item.header.column3}

                                oneColumnOne={item.column1.one}
                                oneColumnTwo={`$ ` + item.column2.one}
                                oneColumnThree={item.column3.one + ` %`}

                                twoColumnOne={item.column1.two}
                                twoColumnTwo={`$ ` + item.column2.two}
                                twoColumnThree={item.column3.two + ` %`}

                                threeColumnOne={item.column1.three}
                                threeColumnTwo={`$ ` + item.column2.three}
                                threeColumnThree={item.column3.three + ` %`}

                                fourColumnOne={item.column1.four}
                                fourColumnTwo={`$ ` + item.column2.four}
                                fourColumnThree={item.column3.four + ` %`}

                                fiveColumnOne={item.column1.five}
                                fiveColumnTwo={`$ ` + item.column2.five}
                                fiveColumnThree={item.column3.five + ` %`}

                                sixColumnOne={item.column1.six}
                                sixColumnTwo={`$ ` + item.column2.six}
                                sixColumnThree={item.column3.six + ` %`}
                            />
                        )
                    })
                }
            </SquaredsContainer>
            <TitleCard
                icon={<PaymentOutlinedIcon/>}
                title="Zona Geográfica"
                description="Generación de Recargas"
                item1="Diaria"
                item2="Semanal"
                item3="Mensual"
            />
        </RechargesBusinessContainer>
    );
}

export default Recharges;