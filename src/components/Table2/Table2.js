import React from 'react';
import {LastMovementsContainer, LastMovementsHeadings, Table} from "./Table2.styles";
import Button from "../Button/Button";
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';

const Table2 = ({ title, subtitle, headings, items, difference, buttonName, firstHeadingOnlyOnce, twoButtons, threeButtons }) => {

    if (firstHeadingOnlyOnce) {
        items.forEach((item) => {
            return items.indexOf(item) !== 0 ? item.title = '' : false;
        })
    }

    return (
        <LastMovementsContainer title={title}>
            <LastMovementsHeadings>
                <h2>{ title }</h2>
                <h3>{ subtitle }</h3>
            </LastMovementsHeadings>
            <div>
                <Table onlyFirstTdStyled={firstHeadingOnlyOnce}>
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
                            items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        {
                                            Object.values(item).map((property, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        {typeof property === 'number' && (
                                                            <td align="center">$ {property}</td>
                                                        )}
                                                        {typeof property !== 'number' && (
                                                            <td align="center">{property}</td>
                                                        )}
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                        {
                                            twoButtons && (
                                                <>
                                                    <td>
                                                        <Button
                                                            buttonName="Ver"
                                                            onButtonClicked={() => console.log('ITEM:', item)}
                                                        />
                                                    </td>
                                                    <td>
                                                        {buttonName === 'state' ? (
                                                            <GetAppOutlinedIcon
                                                                fontSize="default"
                                                                onClick={() => console.log('ICON', item)}
                                                                style={{ cursor: 'pointer' }}/>
                                                        ) : (
                                                            <Button
                                                                buttonName={buttonName}
                                                                onButtonClicked={() => console.log('ITEM:', item)}
                                                            />
                                                        )}
                                                    </td>
                                                </>
                                            )
                                        }
                                        {
                                            threeButtons && (
                                                <>
                                                    <td>
                                                        <Button
                                                            buttonName="NA"
                                                            onButtonClicked={() => console.log('ITEM:', item)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Button
                                                            buttonName="Generar"
                                                            onButtonClicked={() => console.log('ITEM:', item)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <Button
                                                            buttonName="Generar"
                                                            onButtonClicked={() => console.log('ITEM:', item)}
                                                        />
                                                    </td>
                                                </>
                                            )
                                        }
                                        {
                                            !twoButtons && !threeButtons && (
                                                <td>
                                                    {buttonName === 'state' ? (
                                                        <GetAppOutlinedIcon
                                                            fontSize="default"
                                                            onClick={() => console.log('ICON', item)}
                                                            style={{ cursor: 'pointer' }}/>
                                                    ) : (
                                                        <Button
                                                            buttonName={buttonName}
                                                            onButtonClicked={() => console.log('ITEM:', item)}
                                                        />
                                                    )}
                                                </td>
                                            )
                                        }
                                        {difference && <td>Difference here</td>}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </LastMovementsContainer>
    );
}

export default Table2;
