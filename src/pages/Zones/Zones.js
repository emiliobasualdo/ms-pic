import React from "react";

import Tabs from '../../components/Tabs/Tabs';

const Zones = ({children}) => {
    const tabs = [
        {
            path: 'total',
            textContent: 'Total'
        },
        {
            path: 'provincias',
            textContent: 'Provincias'
        },
        {
            path: 'comercios',
            textContent: 'Comercios'
        },
        {
            path: 'alta',
            textContent: 'Alta de Comercios'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Zones;