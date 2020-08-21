import React from 'react';
import {letterFrequency} from '@vx/mock-data';
import {Group} from '@vx/group';
import {Bar} from '@vx/shape';
import {scaleLinear, scaleBand} from '@vx/scale';

const BarGraph = ({barWidth, barHeight}) => {

    // We'll use some mock data from `@vx/mock-data` for this.
    const data = letterFrequency;

    // Define the graph dimensions and margins
    const width = barWidth;
    const height = barHeight;
    const margin = { top: 0, bottom: 0, left: 0, right: 0 };

    // Then we'll create some bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // We'll make some helpers to get at the data we want
    const x = d => d.letter;
    const y = d => +d.frequency * 100;

    // And then scale the graph by our data
    const xScale = scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(x),
        padding: 0.3,
    });

    const yScale = scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(y))],
    });

    // Compose together the scale and accessor functions to get point functions
    const compose = (scale, accessor) => data => scale(accessor(data));
    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);

    // Finally we'll embed it all in an SVG
    return(
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const barHeight = yMax - yPoint(d);
                return(
                    <Group key={`bar-${i}`}>
                        <Bar
                            x={xPoint(d)}
                            y={yMax - barHeight}
                            height={barHeight}
                            width={xScale.bandwidth()}
                            fill="#fc2e1c"
                        />
                    </Group>
                );
            })}
        </svg>
    );
}

export default BarGraph;