import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import "./mapviewer.style.css";

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
          <InfoWindow
            position={position}
            className="pin-window-info"
            onCloseClick={() => setOpen(false)}
          >
            <img
              src={require("./gettyimages-128502214-612x612.png")}
              alt="house with a view"
              className="info-window-image"
            />
            <div className="info-text">
              <p className="house-name">La villa in Spain</p>
              <p className="house-description">This is a very nice house </p>
              <p className="house-price">50.000 $</p>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default Mapviewer;
