import React from 'react';
import { SummaryContainer } from "./Summary.styles";
import BlurOnRoundedIcon from "@material-ui/icons/BlurOnRounded";
import {HorizontalData, ServiceDetail, TitleCard} from "../../../components";
import summary from '../../../mocks/reports/summary.json';
import pricesInvestigation from '../../../mocks/reports/pricesInvestigation.json';
import productsInvestigation from '../../../mocks/reports/productsInvestigation.json';
import antentionInvestigation from '../../../mocks/reports/atentionInvestigation.json';

const ReportsSummary = () => {
    const tableHeadings = ['Clientes', 'Pregunta', 'red', 'orange', 'yellow', 'greenyellow', 'darkGreen', 'Perfiles'];
    return (
        <SummaryContainer>
            <TitleCard
                icon={<BlurOnRoundedIcon fontSize="large" />}
                title="Investigaciones"
                description="Imapcto en la cartera"
            />
            <HorizontalData data={summary} />
            <ServiceDetail title="Investigación de Precios" headings={tableHeadings} items={ pricesInvestigation } />
            <ServiceDetail title="Investigación de Productos" headings={tableHeadings} items={ productsInvestigation } />
            <ServiceDetail title="Investigación de Atención" headings={tableHeadings} items={ antentionInvestigation } />
        </SummaryContainer>
    )
}

export default ReportsSummary;
