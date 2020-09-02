import React from 'react';
import Button from '../Button/Button';
import {RechargesQuantityContainer} from './SquareProgressBars.styles';

const SquareProgressBars = ({width, iframeWidth, iframeHeight}) => {
    return(
        <RechargesQuantityContainer style={{width: width}}>
            <iframe
                title="Cantidad de recargas por zona geográfica"
                src="http://metabase.piux.com.ar/public/question/a0e33560-6e70-43f0-805d-ee929c4a9549"
                frameborder="0"
                width={iframeWidth}
                height={iframeHeight}
                allowtransparency
            ></iframe>
            <Button buttonName="Más Detalles"/>
        </RechargesQuantityContainer>
    );
}

export default SquareProgressBars;