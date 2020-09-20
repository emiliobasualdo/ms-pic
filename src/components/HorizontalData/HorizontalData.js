import React from 'react';
import { HorizontalDataContainer, Table } from "./HorizontalData.styles";
import totalMovements from '../../mocks/services/totalMovements.json';

const HorizontalData = () => {
    return (
        <HorizontalDataContainer>
            <Table>
                <thead>
                    <tr>
                        {totalMovements.map((item, index) => {
                            return (
                                <th key={index}>{item['import']}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {totalMovements.map((item, index) => {
                            return (
                                <td key={index}>{item['text']}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </Table>
        </HorizontalDataContainer>
    )
}

export default HorizontalData;
