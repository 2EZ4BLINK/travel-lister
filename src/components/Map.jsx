import { useGetLatAndLng } from "../hooks/useGetLatAndLng";
import styles from "./Map.module.css";

const Map = () => {
  const { lat, lng, setSearchParams } = useGetLatAndLng();

  const handlePosition = () => {
    setSearchParams({
      lat: 23,
      lng: 25,
    });
  };

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h1>Lat: {lat}</h1>
      <h1>Lng: {lng}</h1>
      <button onClick={handlePosition}>Change Position</button>
    </div>
  );
};

export default Map;
