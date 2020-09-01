import React from "react";
import Tabs from '../../components/Tabs/Tabs';

const Services = ({children}) => {
    const tabs = [
        {
            path: 'total',
            textContent: 'Total'
        },
        {
            path: 'ranking',
            textContent: 'Ranking'
        },
        {
            path: 'abm',
            textContent: 'ABM'
        }
    ]

    return(
        <>
            <Tabs tabItems={tabs}/>
            {children}
        </>
    );
}

export default Services;