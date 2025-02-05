import React, { useState, useEffect } from "react";
import "./locationsList.style.css";
import myData from "../../locations";

const LocationsList = ({ setselectedLocationIndex }) => {
  return (
    <div className="locations-list">
      {myData.map((location, index) => (
        <div
          className="location-row"
          key={location.id}
          onClick={() => {
            setselectedLocationIndex(index);
            console.log(index);
          }}
        >
          <h1>{location.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;
