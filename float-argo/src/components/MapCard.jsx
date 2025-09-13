import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { regions } from '../utils/dummyData';

const MapCentering = ({ regionId }) => {
    const map = useMap();
    const regionBounds = {
        'indian-ocean': [[-40, 40], [30, 100]],
        'bay-of-bengal': [[5, 78], [25, 100]],
        'arabian-sea': [[5, 50], [25, 78]]
    };
    if (regionBounds[regionId]) {
        map.fitBounds(regionBounds[regionId]);
    }
    return null;
};

const MapCard = ({ regionId }) => {
    return (
        <div className="bg-card-bg rounded-2xl shadow-md border border-aqua border-opacity-20 flex-1 p-4 card-3d-effect">
            <MapContainer
                className="w-full h-full rounded-xl z-10"
                zoom={4}
                zoomControl={false}
                attributionControl={false}
            >
                <MapCentering regionId={regionId} />
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                {/* Floating dot markers will be added here dynamically based on data */}
            </MapContainer>
        </div>
    );
};

export default MapCard;