import React from 'react';
import Tabs from '../../Tabs/Tabs';

const Business = ({ children }) => {
    const tabs = [
        {
            path: 'resumen',
            textContent: 'Summary ejecutivo'
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

    return (
        <>
            <Tabs tabItems={tabs} />
            { children }
        </>
    )
}

export default Business;
