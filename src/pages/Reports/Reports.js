import React from "react";
import Tabs from '../../components/Tabs/Tabs';

const Reports = ({children}) => {
    const tabs = [
        {
            path: 'resumen',
            textContent: 'Resumen'
        },
        {
            path: 'investigacioneshistoricas',
            textContent: 'Investigaciones Históricas'
        },
        {
            path: 'investigacionesnuevas',
            textContent: 'Investigaciones Nuevas'
        },
        {
            path: 'bitacora',
            textContent: 'Bitácora'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Reports;