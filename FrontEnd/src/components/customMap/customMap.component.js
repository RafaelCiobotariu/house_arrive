import React, { useState, useEffect, useRef } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import myData from "../../locations";
import Markers from "../markers/markers";

const CustomMap = ({ locations, selectedLocationIndex }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  return (
    <APIProvider apiKey={`${apiKey}`}>
      <Map
        style={{ width: "80vw", height: "100vh" }}
        defaultCenter={{
          lat: myData[1].location.lat,
          lng: myData[1].location.lng,
        }}
        defaultZoom={9}
        mapId={`${mapId}`}
      >
        <Markers points={myData} />
      </Map>
    </APIProvider>
  );
};

export default CustomMap;
