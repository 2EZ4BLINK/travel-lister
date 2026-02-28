import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

import { useGetLatAndLng } from "../hooks/useGetLatAndLng";
import styles from "./Map.module.css";

const Map = () => {
  const navigate = useNavigate();
  const { lat, lng, setSearchParams } = useGetLatAndLng();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const handlePosition = () => {
    setSearchParams({
      lat: 23,
      lng: 25,
    });
  };

  const handleForm = () => {
    navigate("form");
  };

  return (
    <div className={styles.mapContainer} onClick={handleForm}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
