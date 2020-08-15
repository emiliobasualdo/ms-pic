import React from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({width, height, percentage}) => {

    return(
        <CircularProgressbar
            style={{width: width, height: height}}
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={6}
            styles={
                buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '1rem',
                    pathColor: '#FF8000',
                    textColor: '#FF8000',
                    trailColor: '#E4E4E4',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5
                })
            }
        />
    );
}

export default CircularProgress;