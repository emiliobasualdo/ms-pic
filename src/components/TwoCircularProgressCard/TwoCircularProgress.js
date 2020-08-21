import React from 'react';
import {TwoCircularProgressContainer, StyledH3, Cardontent} from './TwoCircularProgress.styles';

const TwoCircularProgressCard = ({title, children}) => {
    return(
        <TwoCircularProgressContainer>
            <StyledH3>{title}</StyledH3>
            <Cardontent>
                        {children}
            </Cardontent>
        </TwoCircularProgressContainer>
    )
}

export default TwoCircularProgressCard;