import React, { useState, useEffect, useRef } from "react";
// import { createRoot } from "react-dom/client";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useMapsLibrary,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

const MapForAddLocationForm = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const mapId = process.env.REACT_APP_MAP_ID;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <APIProvider
      apiKey={`${apiKey}`}
      solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
    >
      <Map
        style={{ height: "800px", width: "800px" }}
        mapId={`${mapId}`}
        defaultZoom={7}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        disableDefaultUI={true}
      >
        <AdvancedMarker ref={markerRef} position={null} />
      </Map>
      <MapControl position={ControlPosition.TOP}>
        <div className="autocomplete-control">
          <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
        </div>
      </MapControl>
      <MapHandler place={selectedPlace} marker={marker} />
    </APIProvider>
  );
};

const MapHandler = ({ place, marker }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }

    marker.position = place.geometry?.location;
  }, [map, place, marker]);
  return null;
};

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);
  useEffect(() => {
    if (!placeAutocomplete) return;

    placeAutocomplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutocomplete.getPlace());
    });
  }, [onPlaceSelect, placeAutocomplete]);
  return (
    <div className="autocomplete-container">
      <input ref={inputRef} />
    </div>
  );
};

export default MapForAddLocationForm;
