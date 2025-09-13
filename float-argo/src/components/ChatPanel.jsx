import React from 'react';
import { AiOutlineSend, AiFillAudio } from 'react-icons/ai';
import { chatResponses } from '../utils/dummyData';

const ChatPanel = () => {
    return (
        <div className="bg-card-bg rounded-2xl p-6 shadow-md border border-aqua border-opacity-20 flex-1 flex flex-col overflow-hidden card-3d-effect">
            <h2 className="text-lg font-semibold text-aqua mb-4 text-center">AI Chatbot</h2>
            <div className="flex-1 flex flex-col space-y-4 overflow-y-auto custom-scrollbar pr-4">
                {/* AI Chat Bubble */}
                {chatResponses.map((response, index) => (
                    <div key={index} className="flex justify-start">
                        <div className="bg-deep-navy p-4 rounded-xl max-w-[85%] border-l-4 border-aqua space-y-2 animate-fade-in">
                            <p className="text-sm font-light text-gray-300">{response.insight}</p>
                            <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                                {/* Dummy Chart Thumbnail */}
                                <div className="w-32 h-20 bg-gray-700 rounded flex items-center justify-center">
                                    <span className="text-xs text-gray-500">Mini Chart</span>
                                </div>
                            </div>
                            <div className="flex space-x-2 text-xs font-robotoMono">
                                {response.badges.map((badge, i) => (
                                    <span key={i} className="bg-gray-700 text-white px-2 py-0.5 rounded-full">
                                        {badge.label}={badge.value}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-2 mt-4 text-xs font-medium">
                <span className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition-colors">Temperature trends</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition-colors">Compare DOXY</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-600 transition-colors">Nearest floats</span>
            </div>

            {/* User Input Bar */}
            <div className="relative mt-4">
                <input
                    type="text"
                    placeholder="Ask a question about the data..."
                    className="w-full bg-deep-navy rounded-full p-3 pl-4 pr-16 text-sm text-white focus:outline-none border border-gray-600"
                />
                <div className="absolute inset-y-0 right-2 flex items-center space-x-2">
                    <button className="p-2 bg-aqua text-deep-navy rounded-full">
                        <AiFillAudio className="text-xl" />
                    </button>
                    <button className="p-2 bg-aqua text-deep-navy rounded-full">
                        <AiOutlineSend className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPanel;