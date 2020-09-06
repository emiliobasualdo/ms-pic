import React from 'react';
import { MovementsContainer, MovementsHeadings, MovementsItems } from './MovementsColumnData.styles';

const MovementsColumnData = ({ title, subtitle, movements }) => {
    return (
        <MovementsContainer>
            <MovementsHeadings>
                <h2>{ title }</h2>
                <h3>{ subtitle }</h3>
            </MovementsHeadings>
            <MovementsItems>
                {
                    movements.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <h3>{ item.title }</h3>
                                <p>$ {item.value}</p>
                            </React.Fragment>
                        )
                    })
                }
            </MovementsItems>
        </MovementsContainer>
    )
}

export default MovementsColumnData;
