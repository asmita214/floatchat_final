import React from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';
import FloatStatusCard from '../components/FloatStatusCard';
import ChatPanel from '../components/ChatPanel';
import MapCard from '../components/MapCard';
import TimeSeriesCard from '../components/TimeSeriesCard';
import HeatmapCard from '../components/HeatmapCard';
import ExportToolbar from '../components/ExportToolbar';

const RegionDashboard = () => {
    const { regionId } = useParams();

    return (
        <div className="flex flex-col h-screen bg-gray-100 overflow-hidden text-gray-800 font-sans">
            {/* TopBar Component  */}
            <TopBar />

            <div className="flex-1 flex flex-col lg:flex-row p-4 space-y-4 lg:space-y-0 lg:space-x-4 overflow-auto">
                {/* Left Column - Float Status */}
                <div className="w-full lg:w-1/4 flex flex-col space-y-4">
                    {/* Float Overview Card */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-none">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Float Overview</h2>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                            <div>
                                <p className="font-medium">Active Floats:</p>
                                <p className="text-2xl font-bold text-blue-600">128</p>
                            </div>
                            <div>
                                <p className="font-medium">Profiles (30d):</p>
                                <p className="text-2xl font-bold text-blue-600">4500</p>
                            </div>
                            <div>
                                <p className="font-medium">QC Count:</p>
                                <p className="text-2xl font-bold text-green-600">95%</p>
                            </div>
                        </div>
                        
                    </div>

                    {/* Float List Card */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-grow overflow-y-auto">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Float List</h2>
                        <div className="space-y-2 text-sm">
                            <p><strong>WMO ID Status Update Depth</strong></p>
                            <p><a href="#" className="text-blue-600 hover:underline">5903932 Active</a> 2023-09-06 0-2000m</p>
                            <p><a href="#" className="text-red-600 hover:underline">5903933 Inactive</a> 2023-09-04 0-2000m</p>
                            <p><a href="#" className="text-blue-600 hover:underline">5903934 Active</a> 2023-09-02 0-2000m</p>
                            <p><a href="#" className="text-orange-600 hover:underline">5903935 Error</a> 2023-09-01 0-2000m</p>
                        </div>
                        {/* <FloatStatusCard type="list" /> */}
                    </div>

                    {/* Robot Status Card */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-none">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Robot Status</h2>
                        <p className="text-gray-700">Status details here...</p>
                        {/* <FloatStatusCard type="robot-status" /> */}
                    </div>
                </div>

                {/* Middle Column - AI Chatbot */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow-md p-4 flex-grow flex flex-col">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">AI Chatbot</h2>
                        <div className="flex-grow overflow-y-auto space-y-4 pb-4">
                            <div className="bg-gray-50 p-3 rounded-lg text-gray-700">
                                Temperature in the Bay of Bengal has increased by 0.5°C over the last 6 months.
                                <div className="mt-2 bg-gray-200 h-24 rounded flex items-center justify-center text-gray-600">Mini Chart</div>
                                <div className="flex justify-between items-center text-sm mt-2 text-gray-600">
                                    <span>QC=✅</span>
                                    <span>n=142</span>
                                    <span>Δ=+0.5°C</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg text-gray-700">
                                Salinity shows a slight decrease in the top 500m depth range.
                                <div className="mt-2 bg-gray-200 h-24 rounded flex items-center justify-center text-gray-600">Mini Chart</div>
                                <div className="flex justify-between items-center text-sm mt-2 text-gray-600">
                                    <span>QC=✅</span>
                                    <span>n=89</span>
                                    <span>Δ=-0.1 PSU</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-none mt-4 border-t pt-4">
                            <div className="flex space-x-2">
                                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200">Temperature trends</button>
                                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200">Compare DOXY</button>
                                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200">Nearest floats</button>
                            </div>
                            <input
                                type="text"
                                placeholder="Type your query..."
                                className="w-full p-2 border border-gray-300 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Map & Visuals */}
                <div className="w-full lg:w-1/4 flex flex-col space-y-4">
                    {/* Map Card - Removed fixed height to let flexbox manage sizing */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-1">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Map</h2>
                        <MapCard regionId={regionId} />
                    </div>

                    {/* Time Series Card */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-none">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Time Series Data</h2>
                        <p className="text-gray-700">Time series chart here...</p>
                        <TimeSeriesCard />
                    </div>

                    {/* Heatmap Card */}
                    <div className="bg-white rounded-lg shadow-md p-4 flex-none">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">Heatmap</h2>
                        <p className="text-gray-700">Heatmap visualization here...</p>
                        <HeatmapCard />
                    </div>
                </div>
            </div>

            {/* Export Toolbar */}
            <div className="flex-none bg-white border-t border-gray-200 p-4 flex justify-end items-center space-x-4 shadow-lg">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <i className="fas fa-download mr-2"></i> Export ASCII (.txt)
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    <i className="fas fa-download mr-2"></i> Export NetCDF (.nc)
                </button>
                <p className="text-sm text-gray-600">Exports reflect current filters.</p>
            </div>
        </div>
    );
};

export default RegionDashboard;