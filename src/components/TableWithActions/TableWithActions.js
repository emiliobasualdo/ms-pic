import React, {useRef} from 'react';
import { TableContainer, TableHeader, TableIcon, TableHeadings, Table, OptionForm, OptionFormHeading, OptionFormItem, Select } from './TableWithActions.styles';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import advantageResults from '../../mocks/coupons/advantageResults.json';

const TableWithActions = ({ header, subHeader }) => {
    const tableHeadings = ['Cantidad de Cupones', 'Monto de Adelantamiento', 'Valor Total o Parcial', '%'];
    const percentages = [10, 20, 25, 30, 50, 60, 75, 80, 90, 'Total'];
    const myPercentageField = useRef();
    const myPartialTotalField = useRef();

    const handleFormSubmit = (e, item) => {
        // todo: the data to send should change to item ids or references (related to the database)
        e.preventDefault();
        let data;
        if (typeof item.couponsQuantity === 'number') {
            data = {
                couponsQuantity: item.couponsQuantity,
                option: item.option,
                bank: item.bank,
                percentage: item.percentage,
                paymentDate: item.paymentDate,
                total: item.total
            }
        } else {
            data = {
                couponsQuantity: item.couponsQuantity === 'percentages' ? parseInt(myPercentageField.current['value'].slice(0, 2)) : myPartialTotalField.current['value'],
                option: item.option,
                bank: item.bank,
                percentage: item.percentage,
                paymentDate: item.paymentDate,
                total: item.total
            }
        }
        console.log('DATA', data);
    }

    return (
        <TableContainer>
            <TableHeader>
                <TableIcon>
                    <LocalAtmIcon fontSize="large" />
                </TableIcon>
                <TableHeadings>
                    <h2>{ header }</h2>
                    <p>{ subHeader }</p>
                </TableHeadings>
            </TableHeader>
            <Table>
                { advantageResults.map((item, index) => {
                    return (
                        <OptionForm key={index}>
                            <OptionFormHeading>{ tableHeadings[index] }</OptionFormHeading>
                            { typeof item['couponsQuantity'] === 'number' && (
                                <form onSubmit={ (e) => handleFormSubmit(e, item) }>
                                    <OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['couponsQuantity'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['option'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['bank'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['percentage'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['paymentDate'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>{ item['total'] }</OptionFormItem>
                                    <hr/>
                                    <OptionFormItem>
                                        <button>Generar</button>
                                    </OptionFormItem>
                                    </OptionFormItem>
                                </form>
                            )}
                            { typeof item['couponsQuantity'] === 'string' && (
                                <form onSubmit={ (e) => handleFormSubmit(e, item) }>
                                    <OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>
                                            {
                                                item['couponsQuantity'] === 'percentages' ? (
                                                    <Select ref={myPercentageField}>
                                                        {
                                                            percentages.map((item, index) => {
                                                                return (
                                                                    <option key={index}>{ typeof item === 'number' ? `${item} %` : item }</option>
                                                                )
                                                            })
                                                        }
                                                    </Select>
                                                ) : (
                                                    <Select ref={myPartialTotalField}>
                                                        <option value="parcial">Parcial</option>
                                                        <option value="total">Total</option>
                                                    </Select>
                                                )
                                            }
                                        </OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>{ item['option'] }</OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>{ item['bank'] }</OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>{ item['percentage'] }</OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>{ item['paymentDate'] }</OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>{ item['total'] }</OptionFormItem>
                                        <hr/>
                                        <OptionFormItem>
                                            <button>Generar</button>
                                        </OptionFormItem>
                                    </OptionFormItem>
                                </form>
                            )}
                        </OptionForm>
                    )
                })}
            </Table>
        </TableContainer>
    )
}

export default TableWithActions;
