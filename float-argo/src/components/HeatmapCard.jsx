import React from 'react';
import Plot from 'react-plotly.js';
import { heatmapData } from '../utils/dummyData';

const HeatmapCard = () => {
    return (
        <div className="bg-card-bg rounded-2xl shadow-md border border-aqua border-opacity-20 p-4 card-3d-effect">
            <h3 className="text-aqua font-semibold mb-2">Depth-Time Heatmap</h3>
            <Plot
                data={[
                    {
                        z: heatmapData[0].z,
                        x: heatmapData[0].x,
                        y: heatmapData[0].y,
                        type: 'heatmap',
                        colorscale: [
                            ['0.0', 'rgb(0,0,102)'],
                            ['0.5', 'rgb(0,102,204)'],
                            ['1.0', 'rgb(102,204,255)']
                        ]
                    }
                ]}
                layout={{
                    autosize: true,
                    margin: { l: 60, r: 20, t: 30, b: 40 },
                    paper_bgcolor: '#121A2C',
                    plot_bgcolor: '#121A2C',
                    font: { color: 'white', family: 'Inter' },
                    xaxis: { showgrid: false, zeroline: false },
                    yaxis: { showgrid: false, zeroline: false }
                }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
};

export default HeatmapCard;