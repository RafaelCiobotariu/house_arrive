import React, { useState, useEffect } from "react";
import "./locationsList.style.css";
import myData from "../../data/locations";

const LocationsList = ({ setselectedLocation }) => {
  return (
    <div className="locations-list">
      {myData.map((location, index) => (
        <div
          className="location-row"
          key={location.id}
          onClick={() => {
            setselectedLocation(location);
          }}
        >
          <h1>{location.name}</h1>
          <p>{location.description}</p>
          <p>{location.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;
