import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import {
  getCardinalDirection,
  getSunriseOrSunset,
  displayCurrentDateTime,
  getSearchedPlaceTime
} from "../../config";
import {Link} from "react-router-dom"
import day from "../../img/day.jpg";
import night from "../../img/night.jpg";
// import "../../../node_modules/weather-icons/css/weather-icons.css";

const CurrentWeather = () => {
  const { city, currentWeather } = useContext(WeatherContext);

  const showMinMaxTemp = (min, max) => {
    return (
      <h3>
        <span>{Math.round(min)}&deg;</span> <span>{Math.round(max)}&deg;</span>
      </h3>
    );
  };

  const roundTemp = temp => {
    return Math.round(temp);
  };

  const isNight = (time, timezone) => {
    const date = new Date(time * 1000 + timezone * 1000);
    return date.getHours() > 22 || date.getHours() < 6;
  };

  if (currentWeather) {
    return (
      <div className="container">
        <div className="card text-center my-3">
          <div className="card-header">
            <h3>Current weather in your city</h3>
            <h6><span style={{fontWeight: 300, fontSize: "12px"}}>Your Local Time:</span> {displayCurrentDateTime()}</h6>
          </div>
          <div className="card-body">
          <h6><span style={{fontWeight: 300, fontSize: "12px"}}>Searched Place Time:</span>{" "}
          {getSearchedPlaceTime(currentWeather.dt, currentWeather.timezone)}
          </h6>
            <h5
              className="card-title"
              style={{ fontSize: "32px", fontWeight: 300 }}
            >
              {!isNight(currentWeather.dt, currentWeather.timezone) ? (
                <img
                  src={`http://openweathermap.org/img/wn/01d@2x.png`}
                  alt="Day"
                  title="Day"
                />
              ) : (
                <img
                  src={`http://openweathermap.org/img/wn/01n@2x.png`}
                  alt="Night"
                  title="Night"
                />
              )}
              {currentWeather.name}, <span>{currentWeather.sys.country}</span>
            </h5>
            {/* <div style={{display: "flex", flexDirection: "column"}}> */}
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt={currentWeather.weather[0].description}
              title={currentWeather.weather[0].description}
            />
            {/* <span>{currentWeather.weather[0].description.charAt(0).toUpperCase() +
                  currentWeather.weather[0].description.slice(1)}</span> */}
                  {/* </div> */}
            <span className="display-4 align-middle">
              {roundTemp(currentWeather.main.temp)}&deg;C
            </span>
            <ul className="list-group">
              <li className="list-group-item">
                Description:{" "}
                {currentWeather.weather[0].description.charAt(0).toUpperCase() +
                  currentWeather.weather[0].description.slice(1)}
              </li>
              <li className="list-group-item">
                Wind: {getCardinalDirection(currentWeather.wind.deg)}, {currentWeather.wind.speed} m/s
              </li>
              <li className="list-group-item">
                Pressure: {currentWeather.main.pressure} hPa
              </li>
              <li className="list-group-item">
                Humidity: {currentWeather.main.humidity} %
              </li>
              <li className="list-group-item">
                Sunrise:{" "}
                {getSunriseOrSunset(
                  currentWeather.sys.sunrise,
                  currentWeather.timezone
                )}
              </li>
              <li className="list-group-item">
                Sunset:{" "}
                {getSunriseOrSunset(
                  currentWeather.sys.sunset,
                  currentWeather.timezone
                )}
              </li>
            </ul>
          </div>
        </div>
        <Link className="btn btn-primary" to={{pathname: `/city/${currentWeather.id}`}}>5 Days Weather</Link>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CurrentWeather;
