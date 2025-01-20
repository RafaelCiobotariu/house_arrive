import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";

const Mapviewer = () => {
  const position = { lat: 50.071, lng: 14.47418 };
  const position2 = { lat: 50.5, lng: 14.47418 };
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={`${apiKey}`}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={position2}
        defaultZoom={10}
        mapId={`${mapId}`}
      >
        <AdvancedMarker position={position} onClick={() => setOpen(true)}>
          <Pin />
        </AdvancedMarker>
        <AdvancedMarker position={position2}>
          <Pin />
        </AdvancedMarker>

        {open && (
          <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
            <p>Im in Prague</p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default Mapviewer;
