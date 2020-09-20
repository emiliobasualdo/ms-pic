import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
//Components
import {
    LargeColumnData,
    SummaryAccordion,
    TitleCard
} from '../../../components';
// Mock
import zonesProvincesData from '../../../mocks/zones/zonesProvincesData.json';
import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
//Styles
import{
    ZonesProvincesContent,
    ProvincesDataContainer,
    AccordionsContainer,
    Card,
    Heading
} from './Provinces.styles';

const ZonesProvinces = () => {
    return(
        <ZonesProvincesContent>
            <TitleCard
                icon={<RoomIcon fontSize="large"/>}
                title="Análisis Provincial"
                description="Principales Indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
                borderLine={true}
            />
            <ProvincesDataContainer>
                {zonesProvincesData.map((item, index) => {
                    return (
                        <LargeColumnData
                            key={index}
                            icon={ <PersonPinCircleOutlinedIcon fontSize="large" /> }
                            type="zonesData"
                            header={item.header}
                            commerceText={item.commerceText}
                            commerceAmmount={item.commerceAmmount}
                            zoneClientsText={item.zoneClientsText}
                            zoneClientsAmmount={item.zoneClientsAmmount}
                            zoneClientsPercentageText={item.zoneClientsPercentageText}
                            zoneClientsPercentageAmmount={item.zoneClientsPercentageAmmount}
                            zoneTransactionsText={item.zoneTransactionsText}
                            zoneTransactionsAmmount={`$ `+ item.zoneTransactionsAmmount}
                            zoneTransactionsPercentageText={item.zoneTransactionsPercentageText}
                            zoneTransactionsPercentageAmmount={`$ `+ item.zoneTransactionsPercentageAmmount}
                            zoneVolumeOpText={item.zoneVolumeOpText}
                            zoneVolumeOpAmmount={`$ `+ item.zoneVolumeOpAmmount}
                            zoneVolumeOpPercentageText={item.zoneVolumeOpPercentageText}
                            zoneVolumeOpPercentageAmmount={`$ `+ item.zoneVolumeOpPercentageAmmount}
                            zoneTicketsText={item.zoneTicketsText}
                            zoneTicketsAmmount={item.zoneTicketsAmmount}
                            zoneTicketsPercentageText={item.zoneTicketsPercentageText}
                            zoneTicketsPercentageAmmount={item.zoneTicketsPercentageAmmount}
                            zoneConsumptionText={item.zoneConsumptionText}
                            zoneConsumptionAmmount={item.zoneConsumptionAmmount}
                            zoneConsumptionPercentageText={item.zoneConsumptionPercentageText}
                            zoneConsumptionPercentageAmmount={item.zoneConsumptionPercentageAmmount}
                            zoneRechargesText={item.zoneRechargesText}
                            zoneRechargesAmmount={item.zoneRechargesAmmount}
                            zoneRechargesPercentageText={item.zoneRechargesPercentageText}
                            zoneRechargesPercentageAmmount={item.zoneRechargesPercentageAmmount}
                            vRechargesText={item.vRechargesText}
                            vRechargesAmmount={item.vRechargesAmmount}
                            vRechargesPercentageText={item.vRechargesPercentageText}
                            vRechargesPercentageAmmount={item.vRechargesPercentageAmmount}
                            zoneVFloatText={item.zoneVFloatText}
                            zoneVFloatAmmount={item.zoneVFloatAmmount}
                            zoneVFloatPercentageText={item.zoneVFloatPercentageText}
                            zoneVFloatPercentageAmmount={item.zoneVFloatPercentageAmmount}
                            buttonName="Más Detalles"
                        />
                    );
                })}
            </ProvincesDataContainer>
            <Card>
                <Heading>Perfiles</Heading>
                <AccordionsContainer>
                    <SummaryAccordion accordionHeader="ProfilesLeft" circlesData={true} />
                    <SummaryAccordion accordionHeader="ProfilesRight" circlesData={true} />
                </AccordionsContainer>
            </Card>
        </ZonesProvincesContent>
    );
}

export default ZonesProvinces;
