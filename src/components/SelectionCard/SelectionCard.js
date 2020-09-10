import React, { useState } from 'react';
//Components
import {
    Button2,
    SquareProgressCircular,
    CircularProgressContainer
} from '../../components';
//Styles
import{
    SelectionCardContainer,
    StoresSelectionContainer,
    Stores,
    StoreSelectedContainer,
    MapAndZones,
    MapData,
    Zones,
    StoresTable,
    Map,
    SelectedStoreInTable
} from './SelectionCard.styles';

const SelectionCard = (props) => {

    const [storeSelected, setStoreSelected] = useState(null);
    const [keyActive, setKeyActive] = useState(false);

    const handleStoreSelected = (storeNumber) => {
        if(!storeSelected && !keyActive){
            setStoreSelected(storeNumber);
            setKeyActive(storeNumber-1);
        } else {
            setStoreSelected(storeNumber);
            setKeyActive(storeNumber-1);
        }
    }

    return(
        <SelectionCardContainer>
            <StoresSelectionContainer>
                <h3>{props.title}</h3>
                <Stores>
                    {
                        props.buttons.map((item, index) => {
                            return (
                                <Button2
                                    key={index}
                                    name={item}
                                    active={keyActive === index ? true : false}
                                    onClick={() => handleStoreSelected(index+1)}
                                />
                            )
                        })
                    }
                </Stores>
            </StoresSelectionContainer>
            { storeSelected && (
                <StoreSelectedContainer>
                    <MapAndZones>
                        <MapData>
                            <p>{props.content[storeSelected - 1].store} - Mapa aqui</p>
                            <Map />
                        </MapData>
                        <Zones>
                            <h4>{props.subtitle}</h4>
                            <SquareProgressCircular width="100%">
                                {props.content[storeSelected - 1].data.zones.map((item, index) => {
                                    return(
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
                                <th>{props.header1}</th>
                                {
                                    props.content.map((item, index) => {
                                        return storeSelected - 1 === index && (
                                            <React.Fragment key={index}>
                                                {props.content[storeSelected - 2] && <th>{props.content[storeSelected - 2].data['storeValues'].title}</th>}
                                                <th>{item.data['storeValues'].title}</th>
                                                {props.content[storeSelected] && <th>{props.content[storeSelected].data['storeValues'].title}</th>}
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {props.rows.map((rowItem, rowIndex) => {
                                return (
                                    <tr key={rowIndex}>
                                        <td>
                                            {rowItem.title}
                                        </td>
                                        {
                                            props.content.map((storeItem, storeIndex) => {
                                                return storeSelected - 1 === storeIndex && (
                                                    <React.Fragment key={storeIndex}>
                                                        {props.content[storeSelected - 2] && <td>{props.content[storeSelected - 2].data['storeValues'][rowItem.value]}</td>}
                                                        <SelectedStoreInTable>{storeItem.data['storeValues'][rowItem.value]}</SelectedStoreInTable>
                                                        {props.content[storeSelected] && <td>{props.content[storeSelected].data['storeValues'][rowItem.value]}</td>}
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
        </SelectionCardContainer>
    );
}

export default SelectionCard;