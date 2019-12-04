import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import {
  getCardinalDirection,
  getSunriseOrSunset,
  displayCurrentDateTime,
  getSearchedPlaceTime,
  roundTemp
} from "../../config";
import "../WeatherWidget/WeatherWidget.css";

const WeatherWidget = () => {
  const { currentWeather, isNight } = useContext(WeatherContext);

  if (currentWeather) {
    return (
      <div>
        <div className="text-center weather-widget">
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
          <h5
            className="card-title"
            style={{ fontSize: "32px", fontWeight: 300 }}
          >
            {currentWeather.name}, <span>{currentWeather.sys.country}</span>
          </h5>
          <img
            src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
            alt={currentWeather.weather[0].description}
            title={currentWeather.weather[0].description}
          />
          <span className="display-4 align-middle">
            {roundTemp(currentWeather.main.temp)}&deg;C
          </span>
          <h6 className="mt-2 mb-4">
            <span style={{ fontWeight: 300, fontSize: "12px" }}>
              Searched Weather Data From Hour:
            </span>{" "}
            <span className="d-block">
              {getSearchedPlaceTime(currentWeather.dt, currentWeather.timezone)}
            </span>
          </h6>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default WeatherWidget;
