import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";

const SearchCity = () => {
  const { submitForm, city, setCity } = useContext(WeatherContext);
  return (
    <div className="container">
    <div className="mx-auto" style={{maxWidth: "460px"}}>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor={"city"}>Your city name</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city..."
            className="form-control"
            name={city}
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default SearchCity;
