import { AdvancedMarker } from "@vis.gl/react-google-maps";
import React from "react";

const Markers = ({ points }) => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point.location}
          key={point.id}
        ></AdvancedMarker>
      ))}
    </>
  );
};

export default Markers;
