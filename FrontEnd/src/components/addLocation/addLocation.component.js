import React, { useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import "./addLocation.styles.css";
import MapForAddLocationForm from "./mapForAddLocationForm";

const countryOptions = countries.map((country) => ({
  value: country.cca2,
  label: `${country.name.common} (${country.cca2})`,
  flag: country.flag,
  location: country.latlng,
  obj: country,
}));

const AddLocation = ({}) => {
  return (
    <main className="add-location-page">
      <MapForAddLocationForm />
      <div className="add-location-input-form">
        <h1 className="add-location-title">
          {" "}
          Please confirm the house location
        </h1>
        <section className="add-location-select">
          <Select
            className="country-selection-select"
            id="country-selection-select"
            options={countryOptions}
            getOptionLabel={(e) => <div>{e.label}</div>}
            onChange={(e) => console.log(e)}
            // value={value}
          />
        </section>
        <section className="add-location-input-section">
          <div id="apt" className="add-location-input-div">
            <input type="text" placeholder="Ap., fl., buiding (if needed)" />
          </div>
          <div id="street-and-nr" className="add-location-input-div">
            <input type="text" placeholder="Street and number" />
          </div>
          <div id="county" className="add-location-input-div">
            <input type="text" placeholder="County" />
          </div>
          <div id="postCode" className="add-location-input-div">
            <input type="text" placeholder="PostCode" />
          </div>
        </section>
      </div>
    </main>
  );
};
// export default CountrySelect;

export default AddLocation;
