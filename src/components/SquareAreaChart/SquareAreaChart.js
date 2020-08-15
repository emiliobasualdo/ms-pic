import React from 'react';
import Button from '../Button/Button';
import {
    RechargesTransactionsContainer,
    RechargesTransactionsTitle,
    Subtitle,
    Img
} from './SquareAreaChart.styles';

const SquareAreaChart = ({width, title}) => {
    return(
        <RechargesTransactionsContainer style={{width: width}}>
            <div>
                <RechargesTransactionsTitle>{title}</RechargesTransactionsTitle>
                <Subtitle>Detalle On line</Subtitle>
            </div>
            <Img alt="gráfico" src="https://www.anychart.com/blog/wp-content/uploads/2017/10/building-a-simple-interactive-javascript-area-chart.gif"/>
            <Button buttonName="Más Detalles"/>
        </RechargesTransactionsContainer>
    );
}

export default SquareAreaChart;