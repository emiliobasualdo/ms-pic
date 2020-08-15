import React from 'react';
import Button from '../Button/Button';
import {
    RechargesQuantityContainer,
    RechargesQuantityTitle,
    Subtitle,
    Img
} from './SquareProgressBars.styles';

const SquareProgressBars = ({width, title}) => {
    return(
        <RechargesQuantityContainer style={{width: width}}>
            <div>
                <RechargesQuantityTitle>{title}</RechargesQuantityTitle>
                <Subtitle>Detalle por Zona Geográfica</Subtitle>
            </div>
            <Img alt="gráfico" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/03adf8c0-7cd3-4bca-a7fc-6fe23457de51/linear-percent-done-progress-indicator-opt.jpeg"/>
            <Button buttonName="Más Detalles"/>
        </RechargesQuantityContainer>
    );
}

export default SquareProgressBars;