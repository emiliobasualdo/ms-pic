import React from 'react';
import BarGraph from '../BarGraph/BarGraph';
import {BarGraphContainer, StyledH3, StyledP} from './BarGraphCard.styles';

const BarGraphCard = ({number, description, barWidth, barHeight}) => {
    return(
        <BarGraphContainer>
            <div>
                <StyledH3>{number}</StyledH3>
                <StyledP>{description}</StyledP>
            </div>
            <BarGraph
                barWidth={barWidth}
                barHeight={barHeight}
            />
        </BarGraphContainer>
    );
}

export default BarGraphCard;