import React from 'react';
import { PromotionsTotalContainer } from './Total.styles';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import {HorizontalData, Table2, TitleCard} from "../../../components";
import totalPromotions from '../../../mocks/promotions/totalPromotions.json';
import impact from "../../../mocks/promotions/impact.json";

const PromotionsTotal = () => {
    const tableHeadings = ['ID de campaña', 'Clientes', 'Consumos', 'Ahorros', 'Aporte Propio', 'Tickets', '% Clientes', '% Volumen', '% Ahorro', 'Pieza y Mensaje', 'Acción'];
    return (
        <PromotionsTotalContainer>
            <TitleCard
                icon={<NewReleasesIcon fontSize="large"/>}
                title="Resumen de Promociones"
                description="Total movimientos"
            />
            <HorizontalData data={totalPromotions} doubleData={true}/>
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={impact}
                twoButtons={true}
                buttonName="state"
            />
        </PromotionsTotalContainer>
    )
}

export default PromotionsTotal;
