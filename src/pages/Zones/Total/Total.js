import React from 'react';
import RoomIcon from '@material-ui/icons/Room';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {ZonesTotalContent} from './Total.styles';

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
        </ZonesTotalContent>
    );
}

export default ZonesTotal;