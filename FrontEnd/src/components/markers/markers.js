import { AdvancedMarker, InfoWindow, Pin } from "@vis.gl/react-google-maps";
import React, { useState, useEffect } from "react";
import "./infoWindow.style.css";
// import CustomInfoWindow from "./customInfoWindow.component";

const Markers = ({ points, selectedMarkerFromList }) => {
  const [open, setOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});

  useEffect(() => {
    if (selectedMarkerFromList) {
      setSelectedMarker(selectedMarkerFromList);
      setOpen(true);
    }
  }, [selectedMarkerFromList]);

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
      {open && selectedMarker.location && (
        <InfoWindow
          position={selectedMarker.location}
          className="pin-window-info"
          onCloseClick={() => setOpen(false)}
        >
          <img
            alt="house with a view"
            className="info-window-image"
            src={require("./gettyimages-128502214-612x612.jpg")}
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
