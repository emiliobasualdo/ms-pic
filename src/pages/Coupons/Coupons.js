import React from "react";
import Tabs from '../../components/Tabs/Tabs';

const Coupons = ({children}) => {
    const tabs = [
        {
            path: 'resumen',
            textContent: 'Resumen'
        },
        {
            path: 'unoporuno',
            textContent: 'Uno por Uno'
        },
        {
            path: 'adelantamiento',
            textContent: 'Adelantamiento'
        },
        {
            path: 'contratos',
            textContent: 'Contratos'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Coupons;