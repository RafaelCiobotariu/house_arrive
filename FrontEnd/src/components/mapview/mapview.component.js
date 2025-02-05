import React, { useState, useEffect } from "react";
import LocationsList from "../locationsList/locationsList.component";
import CustomMap from "../customMap/customMap.component";
import myData from "../../locations";
import "./mapview.style.css";

const Mapview = () => {
  const [selectedLocationIndex, setselectedLocationIndex] = useState(null);

  //   useEffect(() => {}, [selectedMarkerFromList]);

  return (
    <div className="map-container">
      <CustomMap
        selectedLocationIndex={selectedLocationIndex}
        locations={myData}
      />
      <LocationsList setselectedLocationIndex={setselectedLocationIndex} />
    </div>
  );
};

export default Mapview;
