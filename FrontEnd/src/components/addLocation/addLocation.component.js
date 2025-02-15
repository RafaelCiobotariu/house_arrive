import React, { useState, useEffect } from "react";
import myData from "../../data/locations";
import { getAllItems } from "../../utils/localStorage";

const AddLocation = () => {
  const [locations, setLocations] = useState(JSON.stringify(myData));

  useEffect(() => {
    localStorage.setItem("locations", locations);
  }, [locations]);

  const items = JSON.parse(localStorage.getItem("locations"));
  return (
    <div>
      {console.log(items)}
      <input placeholder="Help" />
    </div>
  );
};

export default AddLocation;
