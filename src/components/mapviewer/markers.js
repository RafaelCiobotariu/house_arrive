import { AdvancedMarker, InfoWindow, Pin } from "@vis.gl/react-google-maps";
import React, { useState, useEffect } from "react";
import "./mapviewer.style.css";
// import CustomInfoWindow from "./customInfoWindow.component";

const Markers = ({ points }) => {
  const [open, setOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});

  useEffect(() => {}, [selectedMarker]);

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          key={point.id}
          position={point.location}
          onClick={() => {
            setSelectedMarker(point);
            setOpen(true);
          }}
        ></AdvancedMarker>
      ))}
      {open && (
        <InfoWindow
          position={selectedMarker.location}
          className="pin-window-info"
          onCloseClick={() => setOpen(false)}
        >
          <img
            src={require("./gettyimages-128502214-612x612.png")}
            alt="house with a view"
            className="info-window-image"
          />
          <div className="info-text">
            <p className="house-name">{selectedMarker.name}</p>
            <p className="house-description">{selectedMarker.description}</p>
            <p className="house-price">{selectedMarker.price}$</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export default Markers;
