import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {ZonesProvincesContent} from './Provinces.styles';

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
            />
        </ZonesProvincesContent>
    );
}

export default ZonesProvinces;