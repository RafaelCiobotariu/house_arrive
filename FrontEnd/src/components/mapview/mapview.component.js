import React, { useState, useEffect } from "react";
import LocationsList from "../locationsList/locationsList.component";
import CustomMap from "../customMap/customMap.component";
import myData from "../../data/locations";
import "./mapview.style.css";

const Mapview = () => {
  const [selectedLocation, setselectedLocation] = useState(null);

  //   useEffect(() => {}, [selectedMarkerFromList]);

  return (
    <div className="map-container">
      <CustomMap selectedLocation={selectedLocation} locations={myData} />
      <LocationsList setselectedLocation={setselectedLocation} />
    </div>
  );
};

export default Mapview;
