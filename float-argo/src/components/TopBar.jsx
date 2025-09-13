import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 z-50 bg-card-bg bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 flex items-center justify-between shadow-lg glow-border">
            <div className="flex items-center space-x-4">
                <button onClick={() => navigate('/')} className="text-aqua font-bold text-xl transition-colors hover:text-neon-cyan">
                    &lt; FloatChat
                </button>
                <div className="hidden lg:flex items-center space-x-4">
                    <span className="text-sm text-gray-400">Variable</span>
                    <select className="bg-deep-navy text-white rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-aqua transition-colors">
                        <option>TEMP</option>
                        <option>PSAL</option>
                        <option>DOXY</option>
                    </select>
                    <span className="text-sm text-gray-400">Date Range</span>
                    <input type="date" className="bg-deep-navy text-white rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-aqua transition-colors" />
                    <span className="text-sm text-gray-400">Depth</span>
                    <input type="range" min="0" max="2000" className="w-24 accent-neon-cyan" />
                    <span className="text-sm text-gray-400">QC</span>
                    <input type="checkbox" className="accent-neon-cyan" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;