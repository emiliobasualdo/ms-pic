import React from 'react';
import { Table, TableWrapper } from "./SummaryAccordionItem.styles";

const SummaryAccordionItem = ({ rowsContent }) => {
    return (
        <TableWrapper>
            <Table>
                <thead>
                <tr>
                    <th>{ rowsContent.headerOne }</th>
                    <th>{ rowsContent.headerTwo }</th>
                    <th>{ rowsContent.headerThree }</th>
                    <th>{ rowsContent.headerFour }</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{ rowsContent.firstRowName}</td>
                    <td>{ rowsContent.firstRowFirstAmmount}</td>
                    <td>{ rowsContent.firstRowSecondAmmount}</td>
                    <td>{ rowsContent.firstRowThirdAmmount}</td>
                </tr>
                <tr>
                    <td>{ rowsContent.secondRowName}</td>
                    <td>{ rowsContent.secondRowFirstAmmount}</td>
                    <td>{ rowsContent.secondRowSecondAmmount}</td>
                    <td>{ rowsContent.secondRowThirdAmmount}</td>
                </tr>
                <tr>
                    <td>{ rowsContent.thirdRowName}</td>
                    <td>{ rowsContent.thirdRowFirstAmmount}</td>
                    <td>{ rowsContent.thirdRowSecondAmmount}</td>
                    <td>{ rowsContent.thirdRowThirdAmmount}</td>
                </tr>
                </tbody>
            </Table>
        </TableWrapper>
    )
}

export default SummaryAccordionItem;
