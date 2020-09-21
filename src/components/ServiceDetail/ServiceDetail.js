import React from 'react';
import {Table2} from "../index";


const ServiceDetail = ({title, items}) => {
    const tableHeadings = ['Servicios', 'Empresa', 'Clientes', 'Monto', 'Transacciones', 'Ticket Promedio', 'Perfiles'];

    return (
        <>
            <Table2
                title={title}
                headings={tableHeadings}
                items={items}
                buttonName="Ver"
                firstHeadingOnlyOnce={true}
            />
        </>
    )
}

export default ServiceDetail;
