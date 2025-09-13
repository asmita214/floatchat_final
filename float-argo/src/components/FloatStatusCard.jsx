import React from 'react';
import { FaCheckCircle, FaMinusCircle, FaExclamationCircle } from 'react-icons/fa';
import { floatData, dashboardStats } from '../utils/dummyData';

const FloatStatusCard = ({ type, data, regionId }) => {
    if (type === 'overview') {
        const currentStats = dashboardStats[regionId] || {};
        return (
            <div className="bg-card-bg rounded-2xl p-6 shadow-md border border-aqua border-opacity-20 flex-shrink-0 card-3d-effect">
                <h2 className="text-lg font-semibold text-aqua">Float Overview</h2>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm font-robotoMono">
                    <p>Active Floats: <span className="text-neon-cyan">{currentStats.activeFloats}</span></p>
                    <p>Profiles (30d): <span className="text-neon-cyan">{currentStats.profiles30Days}</span></p>
                    <p>% QC Good: <span className="text-neon-cyan">{currentStats.qcGood}%</span></p>
                </div>
            </div>
        );
    }

    if (type === 'list') {
        return (
            <div className="bg-card-bg rounded-2xl p-6 shadow-md border border-aqua border-opacity-20 flex-1 flex flex-col overflow-hidden card-3d-effect">
                <h2 className="text-lg font-semibold text-aqua mb-4">Float List</h2>
                <div className="overflow-y-auto flex-1 custom-scrollbar">
                    <table className="w-full text-left text-sm font-robotoMono">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-2">WMO ID</th>
                                <th className="py-2">Status</th>
                                <th className="py-2">Update</th>
                                <th className="py-2">Depth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {floatData.map((float) => (
                                <tr key={float.wmoId} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
                                    <td className="py-2 text-cyan-400">{float.wmoId}</td>
                                    <td className="py-2">
                                        <span className={`${float.status === 'Active' ? 'text-green-500' : float.status === 'Inactive' ? 'text-yellow-500' : 'text-red-500'}`}>
                                            {float.status}
                                        </span>
                                    </td>
                                    <td className="py-2 text-gray-400">{float.lastUpdate}</td>
                                    <td className="py-2 text-gray-400">{float.depthRange}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    if (type === 'robot-status') {
        return (
            <div className="bg-card-bg rounded-2xl p-6 shadow-md border border-aqua border-opacity-20 flex-shrink-0 card-3d-effect">
                <h2 className="text-lg font-semibold text-aqua mb-4">Robot Status</h2>
                <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center">
                        <FaCheckCircle className="text-green-500 text-3xl" />
                        <span className="text-sm mt-1">Active</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaMinusCircle className="text-yellow-500 text-3xl" />
                        <span className="text-sm mt-1">Inactive</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaExclamationCircle className="text-red-500 text-3xl" />
                        <span className="text-sm mt-1">Error</span>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default FloatStatusCard;