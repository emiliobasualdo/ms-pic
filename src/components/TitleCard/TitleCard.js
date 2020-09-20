import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {
    TitleCardContainer,
    FirstContainer,
    TitleContainer,
    Title,
    SecondContainer,
    Item,
    ThirdContainer,
    Input
} from './TitleCard.styles';

const TitleCard = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <TitleCardContainer>
            <FirstContainer>
                {props.icon}
                <TitleContainer>
                    <Title>{props.title}</Title>
                    <p>{props.description}</p>
                </TitleContainer>
            </FirstContainer>
            {
                !props.search && (
                    <SecondContainer borderLine={props.borderLine}>
                        {(props.diary && props.weekly && props.monthly) && (
                            <>
                                <Item>{props.diary}</Item>
                                <Item>{props.weekly}</Item>
                                <Item>{props.monthly}</Item>
                            </>
                        )}
                        {props.action && (
                            <Item onClick={props.onClick}>
                                {props.action}
                            </Item>
                        )}
                    </SecondContainer>
                )
            }
            {
                props.search && (
                    <ThirdContainer>
                        <Input>
                            <p>Desde</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Input>
                        <Input>
                            <p>Hasta</p>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Input>
                    </ThirdContainer>
                )
            }
        </TitleCardContainer>
    );
}

export default TitleCard;
