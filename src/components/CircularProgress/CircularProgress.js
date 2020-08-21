import React, {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({width, height, percentage, pathColor, textColor}) => {
    const [valueEnd, setValueEnd] = useState(0);

    useEffect(() => {
        setValueEnd(percentage);
    }, [percentage]);

    return(
        <CircularProgressbar
            style={{width: width, height: height}}
            value={valueEnd}
            text={`${valueEnd}%`}
            strokeWidth={6}
            styles={
                buildStyles({
                    rotation: 0,
                    strokeLinecap: 'round',
                    textSize: '1.2rem',
                    pathColor: pathColor,
                    textColor: textColor,
                    trailColor: '#E4E4E4',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 2
                })
            }
        />
    );
}

export default CircularProgress;