import React from 'react';
import { FiDownload } from 'react-icons/fi';

const ExportToolbar = () => {
    return (
        <div className="sticky bottom-0 z-50 bg-card-bg bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 flex justify-center items-center shadow-lg glow-border">
            <button className="flex items-center space-x-2 bg-neon-cyan text-deep-navy px-4 py-2 rounded-full font-semibold hover:bg-aqua transition-colors">
                <FiDownload />
                <span>Export ASCII (.txt)</span>
            </button>
            <button className="flex items-center space-x-2 bg-neon-cyan text-deep-navy px-4 py-2 rounded-full font-semibold hover:bg-aqua transition-colors">
                <FiDownload />
                <span>Export NetCDF (.nc)</span>
            </button>
            <span className="text-sm text-gray-400">Exports reflect current filters.</span>
        </div>
    );
};

export default ExportToolbar;