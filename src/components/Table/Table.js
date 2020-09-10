import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '../index';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        fontSize: '0.8rem'
    },
});

const SimpleTable = (props) => {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <h2 style={{margin: '2rem 0 1rem 2rem'}}>{props.title}</h2>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            props.headers.map((header, index) => {
                                return <TableCell align="center" key={index}>{header}</TableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {Object.values(row).map((eachRow, index) => {
                                    return(
                                        <React.Fragment key={index}>
                                            {typeof eachRow === "number" && (
                                                <TableCell component="th" scope="row" align="center">
                                                    ${eachRow}
                                                </TableCell>
                                            )}
                                            {typeof eachRow !== "number" && (
                                                <TableCell component="th" scope="row" align="center">
                                                    {eachRow}
                                                </TableCell>
                                            )}
                                        </React.Fragment>
                                    )}
                                )}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SimpleTable;