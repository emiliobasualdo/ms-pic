import React from 'react';
import Tabs from '../../components/Tabs/Tabs';

const Balance = ({children}) => {
    const tabs = [
        {
            path: 'total',
            textContent: 'Total'
        },
        {
            path: 'liquidaciones',
            textContent: 'Liquidaciones'
        },
        {
            path: 'reportes',
            textContent: 'Reportes'
        },
        {
            path: 'impuestos',
            textContent: 'Impuestos'
        },
        {
            path: 'conciliacion',
            textContent: 'Conciliación'
        },
        {
            path: 'agenda',
            textContent: 'Agenda'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Balance;