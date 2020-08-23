import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
//Components
import {
    TitleCard,
    LargeColumnData
} from '../../../components';
//Styles
import {ZonesTotalContent, ZonesDataContainer, ZonesCircleDataContainer} from './Total.styles';
// Mock
import zonesColumnData from '../../../mocks/Zones/zonesColumnData.json';
import zonesColumnCirclesData from '../../../mocks/Zones/zonesColumnCirclesData.json';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';

const ZonesTotal = () => {

    return(
        <ZonesTotalContent>
            <TitleCard
                icon={<RoomIcon fontSize="large"/>}
                title="Análisis Regional"
                description="Principales Indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
            <ZonesDataContainer>
                {zonesColumnData.map((item, index) => {
                    return (
                        <LargeColumnData
                            key={index}
                            icon={ <PersonPinCircleOutlinedIcon fontSize="large" /> }
                            type="zonesData"
                            header={item.header}
                            subheader={item.subheader}
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
                    )
                })}
            </ZonesDataContainer>
            <ZonesCircleDataContainer>
                {zonesColumnCirclesData.map((item, index) => {
                    return (
                        <LargeColumnData
                            key={index}
                            icon={ <PersonPinCircleOutlinedIcon fontSize="large" /> }
                            type="zonesCirclesData"
                            header={item.header}
                            subheader={item.subheader}
                            labelF={item.labelF}
                            valueF={item.valueF}
                            labelM={item.labelM}
                            valueM={item.valueM}
                            labelTraditionalOne={item.labelTraditionalOne}
                            valueTraditionalOne={item.valueTraditionalOne}
                            labelPrepaidOne={item.labelPrepaidOne}
                            valuePrepaidOne={item.valuePrepaidOne}
                            labelTraditionalTwo={item.labelTraditionalTwo}
                            valueTraditionalTwo={item.valueTraditionalTwo}
                            labelPrepaidTwo={item.labelPrepaidTwo}
                            valuePrepaidTwo={item.valuePrepaidTwo}
                            labelTraditionalThree={item.labelTraditionalThree}
                            valueTraditionalThree={item.valueTraditionalThree}
                            labelPrepaidThree={item.labelPrepaidThree}
                            valuePrepaidThree={item.valuePrepaidThree}
                            labelNew={item.labelNew}
                            valueNew={item.valueNew}
                            labelCurrent={item.labelCurrent}
                            valueCurrent={item.valueCurrent}
                        />
                    )
                })}
            </ZonesCircleDataContainer>
        </ZonesTotalContent>
    );
}

export default ZonesTotal;
