import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";

const SearchCity = () => {
  const { submitForm, city, setCity } = useContext(WeatherContext);
  return (
    <div className="container">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchCity;
