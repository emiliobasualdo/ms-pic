import React from 'react';
import {Table2, TitleCard} from "../../../components";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import abm from '../../../mocks/services/abm.json';

const ServicesABM = () => {
    const tableHeadings = ['Servicios', 'Empresa', 'Clientes', 'Alta', 'Modificación', 'Baja'];

    return (
        <>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large"/>}
                title="Modificación de Servicios"
                description="Alta - Baja - Modificación"
            />
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={abm}
                buttonName="Ver"
                abm={true}
            />
        </>
    )
}

export default ServicesABM;
