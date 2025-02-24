import React, { useState, useEffect } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Markers from "../markers/markers";

const CustomMap = ({ selectedLocation, locations }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const [mapCenter, setMapCenter] = useState({
    lat: locations[2].location.lat,
    lng: locations[2].location.lng,
  });

  useEffect(() => {
    if (selectedLocation) {
      setMapCenter(selectedLocation.location);
    }
  }, [selectedLocation]);

  return (
    <APIProvider apiKey={`${apiKey}`}>
      <Map
        style={{ width: "100%", height: "94vh" }}
        defaultCenter={mapCenter}
        defaultZoom={9}
        mapId={`${mapId}`}
        disableDefaultUI="false"
      >
        <Markers points={locations} selectedMarkerFromList={selectedLocation} />
      </Map>
    </APIProvider>
  );
};

export default CustomMap;
