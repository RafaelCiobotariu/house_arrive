import React from "react";
import { Map } from "@vis.gl/react-google-maps";
import Markers from "../markers/markers";

const MapFromList = ({ mapId, locations, selectedLocation }) => {
  return (
    <div>
      <Map
        style={{ width: "80vw", height: "100vh" }}
        defaultCenter={selectedLocation}
        defaultZoom={11}
        mapId={mapId}
        disableDefaultUI="false"
      >
        <Markers points={locations} selectedMarkerFromList={selectedLocation} />
      </Map>
    </div>
  );
};

export default MapFromList;
