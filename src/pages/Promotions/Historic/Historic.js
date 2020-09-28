import React from 'react';
import { PromotionsHistoricContainer } from "./Historic.styles";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import {HorizontalData, Table2, TitleCard} from "../../../components";
import historicHorizontal from '../../../mocks/promotions/historicHorizontal.json';
import historicTable from '../../../mocks/promotions/historicTable.json';

const PromotionsHistoric = () => {
    const tableHeadings = ['Campaña', 'Universo', 'Clientes I.', '%', 'Consumo Antes', 'Consumo Post', 'Aporte Total', 'Descuento', 'Relación IVA', 'Pieza y Mensaje', 'Segmentación'];

    return (
        <PromotionsHistoricContainer>
            <TitleCard
                icon={<NewReleasesIcon fontSize="large"/>}
                title="Promociones Históricas"
                description="Impacto en la cartera"
                withSlider={true}
            />
            <HorizontalData data={historicHorizontal} doubleData={true} />
            <Table2
                title="Resultados de Campañas"
                headings={tableHeadings}
                items={historicTable}
                twoButtons={true}
                buttonName="Ver"
            />
        </PromotionsHistoricContainer>
    )
}

export default PromotionsHistoric;
