import React from 'react';
import Button from '../Button/Button';
import {RechargesTransactionsContainer} from './SquareAreaChart.styles';

const SquareAreaChart = ({width, iframeWidth, iframeHeight}) => {
    return(
        <RechargesTransactionsContainer style={{width: width}}>
            <iframe
                title="Volumen de recargas por zona"
                src="http://metabase.piux.com.ar/public/question/bcb5939f-17ae-4879-9ca8-e301523a93ff"
                frameborder="0"
                width={iframeWidth}
                height={iframeHeight}
                allowtransparency
            ></iframe>
            <Button buttonName="Más Detalles"/>
        </RechargesTransactionsContainer>
    );
}

export default SquareAreaChart;