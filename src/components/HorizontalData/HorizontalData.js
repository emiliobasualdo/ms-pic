import React from 'react';
import { HorizontalDataContainer, Table } from "./HorizontalData.styles";

const HorizontalData = ({ data, doubleData }) => {
    console.log(data);
    return (
        <HorizontalDataContainer>
            <Table>
                <thead>
                    <tr>
                        {data.map((item, index) => {
                            if (doubleData && typeof item['import'].first === 'number') {
                                item['import'].first = `$ ${item['import'].first}`;
                            }
                            return doubleData && item['import'].percentage ? (
                                <th key={index}>{item['import']['first']}<br/>{item['import']['percentage']} %</th>
                            ) : (
                                <th key={index}>{item['import']}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data.map((item, index) => {
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
