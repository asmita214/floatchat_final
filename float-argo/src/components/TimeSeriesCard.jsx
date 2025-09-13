import React from 'react';
import Plot from 'react-plotly.js';
import { timeSeriesData } from '../utils/dummyData';

const TimeSeriesCard = () => {
    return (
        <div className="bg-card-bg rounded-2xl shadow-md border border-aqua border-opacity-20 p-4 card-3d-effect">
            <h3 className="text-aqua font-semibold mb-2">Time Series</h3>
            <Plot
                data={[
                    {
                        x: timeSeriesData.labels,
                        y: timeSeriesData.temperature,
                        type: 'scatter',
                        mode: 'lines+markers',
                        name: 'Temperature',
                        marker: { color: '#00E5FF' },
                        line: { color: '#00E5FF' }
                    },
                ]}
                layout={{
                    autosize: true,
                    margin: { l: 40, r: 20, t: 30, b: 40 },
                    paper_bgcolor: '#121A2C',
                    plot_bgcolor: '#121A2C',
                    font: { color: 'white', family: 'Inter' },
                    xaxis: {
                        showgrid: false,
                        zeroline: false,
                        tickfont: { family: 'Roboto Mono' }
                    },
                    yaxis: {
                        showgrid: true,
                        gridcolor: '#2C3E50',
                        zeroline: false
                    },
                    showlegend: false
                }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
};

export default TimeSeriesCard;