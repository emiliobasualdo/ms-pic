import React from 'react';
import {Table2} from "../index";
import energyMovements from '../../mocks/services/energyMovements.json';
import gasMovements from '../../mocks/services/gasMovements.json';
import taxesMovements from '../../mocks/services/taxesMovements.json';

const ServiceDetail = () => {
    const tableHeadings = ['Servicios', 'Empresa', 'Clientes', 'Monto', 'Transacciones', 'Ticket Promedio', 'Perfiles'];

    return (
        <>
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={energyMovements}
                buttonName="Ver"
                firstHeadingOnlyOnce={true}
            />
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={gasMovements}
                buttonName="Ver"
                firstHeadingOnlyOnce={true}
            />
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={taxesMovements}
                buttonName="Ver"
                firstHeadingOnlyOnce={true}
            />
        </>
    )
}

export default ServiceDetail;
