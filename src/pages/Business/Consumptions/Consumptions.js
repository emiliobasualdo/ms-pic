import React from 'react';
import TitleCard from '../../../components/TitleCard/TitleCard';
import ColumnData from '../../../components/ColumnData/ColumnData';
import SquareData from '../../../components/SquareData/SquareData';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import NearMeIcon from '@material-ui/icons/NearMe';
import consumptionsAnalysisData from '../../../mocks/consumptions/consumptionsAnalysis/consumptionsAnalysis.json';
import moneyFlowData from '../../../mocks/consumptions/moneyFlow/moneyFlow.json';
import geographicZoneData from '../../../mocks/consumptions/geographicZone/geographicZone.json';
import {
    ConsumptionsBusinessContainer,
    ConsumptionsBusinessDataContainer,
    SquaredsContainer
} from "./Consumptions.styles";

const Consumptions = () => {
    return(
        <ConsumptionsBusinessContainer>
            <TitleCard
                icon={<PermDeviceInformationIcon fontSize="large"/>}
                title="Análisis de consumos"
                description="Principales indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
            <ConsumptionsBusinessDataContainer>
                {
                    consumptionsAnalysisData.map((item, index) => {
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
            </ConsumptionsBusinessDataContainer>
            <TitleCard
                icon={<LocalAtmIcon fontSize="large"/>}
                title="Flujo de Dinero"
                description="Consumos"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
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
                            />
                        )
                    })
                }
            </SquaredsContainer>
            <TitleCard
                icon={<NearMeIcon fontSize="large"/>}
                title="Zona Geográfica"
                description="Consumos"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
            <SquaredsContainer>
                {
                    geographicZoneData.map((item, index) => {
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
        </ConsumptionsBusinessContainer>
    );
}

export default Consumptions;
