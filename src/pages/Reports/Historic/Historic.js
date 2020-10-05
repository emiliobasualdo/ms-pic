import React from 'react';
import { HistoricContainer } from './Historic.styles';
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import {HorizontalData, Table2, TitleCard} from "../../../components";
import historicData from '../../../mocks/reports/historicData.json';
import historicPrices from '../../../mocks/reports/historicPrices.json';

const HistoricReports = () => {
    const tableHeadings = ['Investigación', 'Desde', 'Hasta', 'Clientes', 'Preguntas', 'red', 'orange', 'yellow', 'greenyellow', 'darkGreen', 'Segmentación'];

    return (
        <HistoricContainer>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large" />}
                title="Investigaciones Históricas"
                description="Imapcto en la cartera"
            />
            <HorizontalData data={ historicData } />
            <Table2
                title="Detalle de Servicios básicos"
                headings={tableHeadings}
                items={ historicPrices }
                buttonName="Ver"
            />
        </HistoricContainer>
    )
}

export default HistoricReports;
