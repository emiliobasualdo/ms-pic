import React from "react";
import Tabs from '../../components/Tabs/Tabs';

const Promotions = ({children}) => {
    const tabs = [
        {
            path: 'resumen',
            textContent: 'Resumen'
        },
        {
            path: 'promocioneshistoricas',
            textContent: 'Promociones Históricas'
        },
        {
            path: 'promocionesnuevas',
            textContent: 'Promociones Nuevas'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Promotions;