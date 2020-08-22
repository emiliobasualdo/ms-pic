import React from 'react';
import StoreIcon from '@material-ui/icons/Store';
//Components
import {
    TitleCard,
} from '../../../components';
//Styles
import {ZonesStoresContent} from './Stores.styles';

const ZonesStores = () => {
    return(
        <ZonesStoresContent>
            <TitleCard
                icon={<StoreIcon fontSize="large"/>}
                title="Análisis por Comercio"
                description="Principales Indicadores"
                diary="Diaria"
                weekly="Semanal"
                monthly="Mensual"
            />
        </ZonesStoresContent>
    );
}

export default ZonesStores;