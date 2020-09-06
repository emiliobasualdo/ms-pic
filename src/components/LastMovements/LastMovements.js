import React from 'react';
import { LastMovementsContainer, LastMovementsHeadings, Table} from "./LastMovements.styles";
import Button from "../Button/Button";

const LastMovements = ({ title, subtitle, headings, items }) => {
    return (
        <LastMovementsContainer title={title}>
            <LastMovementsHeadings>
                <h2>{ title }</h2>
                <h3>{ subtitle }</h3>
            </LastMovementsHeadings>
            <div>
                <Table>
                    <thead>
                        <tr>
                            {
                                headings.map((item, index) => {
                                    return <th key={index}>{item}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((movement, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            Object.values(movement).map((property, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {typeof property === 'number' && (
                                                            <td align="left">$ {property}</td>
                                                        )}
                                                        {typeof property !== 'number' && (
                                                            <td align="left">{property}</td>
                                                        )}
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                        <td><Button buttonName="Detalle" onButtonClicked={() => console.log('MOVIMIENTO:', movement)} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </LastMovementsContainer>
    )
}

export default LastMovements;
