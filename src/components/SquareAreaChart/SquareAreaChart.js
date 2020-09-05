import React from 'react';
import Button from '../Button/Button';
import {RechargesTransactionsContainer} from './SquareAreaChart.styles';
import MetabaseGraph from '../MetabaseGraph/MetabaseGraph'

const SquareAreaChart = ({width, iframeWidth, iframeHeight}) => {
    return(
        <RechargesTransactionsContainer style={{width: width}}>
            <MetabaseGraph
              title={"Volumen de recargas por zona"}
              graphId={"bcb5939f-17ae-4879-9ca8-e301523a93ff"}
              width={iframeWidth}
              height={iframeHeight}
            />
            <Button buttonName="Más Detalles"/>
        </RechargesTransactionsContainer>
    );
}

export default SquareAreaChart;

