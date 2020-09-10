import React from 'react';
import StoreIcon from '@material-ui/icons/Store';
import {TitleCard, SelectionCard} from '../../../components';
import zonesStoresData from '../../../mocks/zones/zonesStoresData.json';
import{ZonesStoresContent} from './Stores.styles';

const ZonesStores = () => {

    const storesButtons = [
        "Comercio001",
        "Comercio002",
        "Comercio003",
        "Comercio004",
        "Comercio005",
        "Comercio006",
        "Comercio007",
        "Comercio008",
        "Comercio009",
        "Comercio010",
        "Comercio011",
        "Comercio012",
        "Comercio013",
        "Comercio014",
        "Comercio015",
        "Comercio016",
        "Comercio017",
        "Comercio018",
        "Comercio019",
        "Comercio020",
    ]

    const rows = [
        {
            title: 'Clientes',
            value: 'clients'
        },
        {
            title: '%',
            value: 'clientsPercentage'
        },
        {
            title: 'Transacciones',
            value: 'transactions'
        },
        {
            title: '%',
            value: 'transactionsPercentage'
        },
        {
            title: 'V. Consumo',
            value: 'vConsumption'
        },
        {
            title: '%',
            value: 'vConsumptionPercentage'
        },
        {
            title: 'Clientes Prepagos',
            value: 'prepaidClients'
        },
        {
            title: '%',
            value: 'prepaidClientsPercentage'
        },
        {
            title: 'Tradicional',
            value: 'traditional'
        },
        {
            title: '%',
            value: 'vConsumptionPercentage'
        },
        {
            title: 'Actual',
            value: 'current'
        },
        {
            title: '%',
            value: 'currentPercentage'
        },
        {
            title: 'Nuevo',
            value: 'new'
        },
        {
            title: '%',
            value: 'newPercentage'
        },
        {
            title: 'Tickets por Cliente',
            value: 'ticketsPerClient'
        },
        {
            title: 'Consumo por Cliente',
            value: 'consumptionPerClient'
        },
        {
            title: 'Volumen por Cliente',
            value: 'volumePerClient'
        }
    ]

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
            <SelectionCard
                title="Seleccione el número de comercio"
                subtitle="Comparado por Zona"
                header1="Variables"
                buttons={storesButtons}
                content={zonesStoresData}
                rows={rows}
            />
        </ZonesStoresContent>
    );
}

export default ZonesStores;