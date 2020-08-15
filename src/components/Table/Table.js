import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const createData = (one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen) => {
    return {one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen};
}

const rows = [
    createData('0-1000', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
    createData('1001-3000', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
    createData('3001-5000', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
    createData('5001-7500', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
    createData('+7500', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
    createData('Total', 11.387, '20.2%', 21.060, '7.9%', '$12,068,588', '3.8%', 8.952, '6.8%', '$5,179,341', '3.3%', 12.108, '9%', '$6,855,803', '4.2%'),
];

const SimpleTable = (props) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">{props.header1}</TableCell>
                        <TableCell align="center">{props.header2}</TableCell>
                        <TableCell align="center">{props.header3}</TableCell>
                        <TableCell align="center">{props.header4}</TableCell>
                        <TableCell align="center">{props.header5}</TableCell>
                        <TableCell align="center">{props.header6}</TableCell>
                        <TableCell align="center">{props.header7}</TableCell>
                        <TableCell align="center">{props.header8}</TableCell>
                        <TableCell align="center">{props.header9}</TableCell>
                        <TableCell align="center">{props.header10}</TableCell>
                        <TableCell align="center">{props.header11}</TableCell>
                        <TableCell align="center">{props.header12}</TableCell>
                        <TableCell align="center">{props.header13}</TableCell>
                        <TableCell align="center">{props.header14}</TableCell>
                        <TableCell align="center">{props.header15}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" align="center">
                                {row.one}
                            </TableCell>
                            <TableCell align="center">{row.two}</TableCell>
                            <TableCell align="center">{row.three}</TableCell>
                            <TableCell align="center">{row.four}</TableCell>
                            <TableCell align="center">{row.five}</TableCell>
                            <TableCell align="center">{row.six}</TableCell>
                            <TableCell align="center">{row.seven}</TableCell>
                            <TableCell align="center">{row.eight}</TableCell>
                            <TableCell align="center">{row.nine}</TableCell>
                            <TableCell align="center">{row.ten}</TableCell>
                            <TableCell align="center">{row.eleven}</TableCell>
                            <TableCell align="center">{row.twelve}</TableCell>
                            <TableCell align="center">{row.thirteen}</TableCell>
                            <TableCell align="center">{row.fourteen}</TableCell>
                            <TableCell align="center">{row.fifteen}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;