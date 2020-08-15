import React from 'react';
import Tabs from '../../components/Tabs/Tabs';

const Business = ({children}) => {
    const tabs = [
        {
            path: 'resumen',
            textContent: 'Resumen ejecutivo'
        },
        {
            path: 'total',
            textContent: 'Total'
        },
        {
            path: 'prepago',
            textContent: 'Prepago'
        },
        {
            path: 'tradicional',
            textContent: 'Tradicional'
        },
        {
            path: 'recargas',
            textContent: 'Recargas'
        },
        {
            path: 'consumos',
            textContent: 'Consumos'
        },
        {
            path: 'cobro',
            textContent: 'Medios de cobro'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Business;
