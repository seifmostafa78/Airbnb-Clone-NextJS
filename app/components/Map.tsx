"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SearchResultData } from "../types/app";
import { getCenter } from "geolib";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { Icon } from "leaflet";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  const customIcon = new Icon({
    iconUrl: "/mapMarker.png", 
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={11}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {searchResultData.map((listing, i) => (
        <Marker
          key={i}
          position={[listing.lat, listing.long]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h2>{listing.title}</h2>
              <Image
                src="/mapMarker.png"
                alt="map-marker"
                width={24}
                height={24}
              />
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
