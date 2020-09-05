import React from 'react';
import {Button} from '../index';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import {
    ProcessValidationContainer,
    CardHeader,
    IconContainer,
    TextContainer,
    Title,
    SecondaryText
} from './ProcessValidationCard.styles';

const ProcessValidationCard = (props) => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    
    const createData = (one, two, three) => {
        return {one, two, three};
    }
    
    const rows = [
        createData('Alta de comercio', '06/05/2020', 'yes'),
        createData('Alta de métodos de captura', '06/05/2020', 'yes'),
        createData('Alta de aceptación', '07/05/2020', 'yes'),
        createData('Banco Pagador & Aspectos Legales', '07/05/2020', 'no'),
        createData('Implementación', '10/05/2020', <Button buttonName={props.buttonName}/>),
    ];

    const classes = useStyles();

    return(
        <ProcessValidationContainer>
            <CardHeader>
                <IconContainer>
                    <PlayCircleOutlineOutlinedIcon fontSize="large" />
                </IconContainer>
                <TextContainer>
                    <Title>{props.heading}</Title>
                    <SecondaryText>
                        <h3>{props.subheading}</h3>
                    </SecondaryText>
                </TextContainer>
            </CardHeader>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">{props.header1}</TableCell>
                            <TableCell align="center">{props.header2}</TableCell>
                            <TableCell align="center">{props.header3}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.one}
                                </TableCell>
                                <TableCell align="center">{row.two}</TableCell>
                                <TableCell align="center">{row.three}</TableCell>
                                <TableCell align="center">{row.four}</TableCell>
                                <TableCell align="center">{row.five}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ProcessValidationContainer>
    )
}

export default ProcessValidationCard;