import React, { useState } from 'react';
import StoreIcon from '@material-ui/icons/Store';
//Components
import {
    TitleCard,
    Button,
    SquareProgressCircular,
    CircularProgressContainer
} from '../../../components';
//Styles
import {ZonesStoresContent, StoresSelectionContainer, StoreSelectedContainer, MapAndZones, MapData, Zones, StoresTable, Map, SelectedStoreInTable} from './Stores.styles';
//Mock
import zonesStoresData from '../../../mocks/Zones/zonesStoresData.json';

const ZonesStores = () => {
    const [storeSelected, setStoreSelected] = useState(null);

    const handleStoreSelected = (storeNumber) => {
        setStoreSelected(storeNumber);
    }

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
            <StoresSelectionContainer storesLength={zonesStoresData.length}>
                {
                    zonesStoresData.map((item, index) => {
                        return (
                            <Button key={index} buttonName={item.store} isSubmit={false} onButtonClicked={() => handleStoreSelected(index + 1)}/>
                        )
                    })
                }
            </StoresSelectionContainer>
            { storeSelected && (
                <StoreSelectedContainer>
                    <MapAndZones>
                        <MapData>
                            <p>{ zonesStoresData[storeSelected - 1].store } - Mapa aqui</p>
                            <Map />
                        </MapData>
                        <Zones>
                            <h4>Comparado por Zona</h4>
                            <SquareProgressCircular width="100%">
                                {zonesStoresData[storeSelected - 1].data.zones.map((item, index) => {
                                    return (
                                        <CircularProgressContainer
                                            key={index}
                                            percentage={item.value}
                                            progressDescription={item.title}
                                            width="25%"
                                            height="50%"
                                            textColor="rgb(255, 0, 0)"
                                            pathColor="rgb(255, 0, 0)"
                                        />
                                    )
                                })}
                            </SquareProgressCircular>
                        </Zones>
                    </MapAndZones>
                    <StoresTable>
                        <thead>
                            <tr>
                                <th>
                                    Variables
                                </th>
                                {
                                    zonesStoresData.map((item, index) => {
                                        return storeSelected - 1 === index && (
                                            <React.Fragment key={index}>
                                                {zonesStoresData[storeSelected - 2] && <th>{zonesStoresData[storeSelected - 2].data['storeValues'].title}</th>}
                                                <th>{item.data['storeValues'].title}</th>
                                                {zonesStoresData[storeSelected] && <th>{zonesStoresData[storeSelected].data['storeValues'].title}</th>}
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((rowItem, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            {rowItem.title}
                                        </td>
                                        {
                                            zonesStoresData.map((storeItem, storeIndex) => {
                                                return storeSelected - 1 === storeIndex && (
                                                    <React.Fragment key={storeIndex}>
                                                        {zonesStoresData[storeSelected - 2] && <td>{zonesStoresData[storeSelected - 2].data['storeValues'][rowItem.value]}</td>}
                                                        <SelectedStoreInTable>{storeItem.data['storeValues'][rowItem.value]}</SelectedStoreInTable>
                                                        {zonesStoresData[storeSelected] && <td>{zonesStoresData[storeSelected].data['storeValues'][rowItem.value]}</td>}
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })}
                        </tbody>
                    </StoresTable>
                </StoreSelectedContainer>
            )}
        </ZonesStoresContent>
    );
}

export default ZonesStores;
