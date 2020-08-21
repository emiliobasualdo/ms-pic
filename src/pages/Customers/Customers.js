import React from 'react';
import Tabs from '../../components/Tabs/Tabs';

const Customers = ({children}) => {
    const tabs = [
        {
            path: 'total',
            textContent: 'Total'
        },
        {
            path: 'actuales',
            textContent: 'Actuales'
        },
        {
            path: 'nuevos',
            textContent: 'Nuevos'
        },
        {
            path: 'tradicionales',
            textContent: 'Tradicionales'
        },
        {
            path: 'prepagos',
            textContent: 'Prepagos'
        },
        {
            path: 'perfiles',
            textContent: 'Perfiles'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Customers;