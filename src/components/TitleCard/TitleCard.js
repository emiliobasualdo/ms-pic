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
    Input,
    SliderContent,
    Range,
    SliderValue
} from './TitleCard.styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const PrettoSlider = withStyles({
    root: {
        color: '#00c292',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

const TitleCard = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [sliderValue, setSliderValue] = React.useState([10, 2000]);
    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSliderChange = (event, newValue) => {
        console.log(event, newValue);
        setSliderValue(newValue);
    };

    return(
        <TitleCardContainer withSlider={ !!props.withSlider }>
            <FirstContainer>
                {props.icon}
                <TitleContainer>
                    <Title>{props.title}</Title>
                    <p>{props.description}</p>
                </TitleContainer>
            </FirstContainer>
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
            {
                props.withSlider && (
                    <SliderContent className={classes.root}>
                        <Typography id="range-slider" gutterBottom>
                            <Range>Rango de Aporte:</Range> <SliderValue>${sliderValue[0]} - $2000</SliderValue>
                        </Typography>
                        <PrettoSlider
                            color="primary"
                            min={10}
                            max={2000}
                            step={10}
                            value={sliderValue}
                            onChange={handleSliderChange}
                        />
                    </SliderContent>
                )
            }
            {
                !props.search && !props.withSlider && (
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
        </TitleCardContainer>
    );
}

export default TitleCard;
