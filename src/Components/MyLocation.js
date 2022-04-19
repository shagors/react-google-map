import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MyLocation = () => {
    return (
        <div>
            <MapContainer center={[25.73296743220128, 89.2826423673456]}
            zoom={10}
            scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[25.73296743220128, 89.2826423673456]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MyLocation;