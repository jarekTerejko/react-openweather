import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import {
  getCardinalDirection,
  getSunriseOrSunset,
  displayCurrentDateTime,
  getSearchedPlaceTime,
  roundTemp
} from "../../config";
import { Link } from "react-router-dom";
import day from "../../img/day.jpg";
import night from "../../img/night.jpg";
import clear from "../../img/clear.jpg";
import clouds from "../../img/clouds.jpg";
import rain from "../../img/rain.jpg";
import drizzle from "../../img/drizzle.jpg";
import mist from "../../img/mist.jpg";
import storm from "../../img/storm.jpg";
import snow from "../../img/snow.jpg";
import normal from "../../img/normal.jpg";
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

  const isNight = (time, timezone) => {
    const date = new Date(time * 1000 + timezone * 1000);
    return date.getHours() > 22 || date.getHours() < 6;
  };

  const changeBackground = result => {
    switch (result) {
      case "Clear":
        document.body.style.backgroundImage = `url(${clear})`;
        break;
      case "Clouds":
        document.body.style.backgroundImage = `url(${clouds})`;
        break;
      case "Rain":
        document.body.style.backgroundImage = `url(${rain})`;
        break;
      case "Drizzle":
        document.body.style.backgroundImage = `url(${drizzle})`;
        break;
      case "Mist":
        document.body.style.backgroundImage = `url(${mist})`;
        break;
      case "Thunderstorm":
        document.body.style.backgroundImage = `url(${storm})`;
        break;
      case "Snow":
        document.body.style.backgroundImage = `url(${snow})`;
        break;
      default:
        document.body.style.backgroundImage = `url(${normal})`;
    }
  };

  if (currentWeather) {
    changeBackground(currentWeather.weather[0].main);
    return (
      <div className="container">
        <div
          style={{ maxWidth: "460px", padding: "20px", borderRadius: "5px" }}
          className="mx-auto weather-container my-4"
        >
          <div
            className="card text-center my-3"
            style={{ background: "transparent" }}
          >
            <div className="card-header">
              <h3>Current weather</h3>
              <h6>
                <span style={{ fontWeight: 300, fontSize: "12px" }}>
                  Your Local Time:
                </span>{" "}
                <span className="d-block">{displayCurrentDateTime()}</span>
              </h6>
            </div>
            <div className="card-body">
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
              <h6 className=" mt-2">
                <span style={{ fontWeight: 300, fontSize: "12px" }}>
                  Searched Weather Data From Hour:
                </span>{" "}
                <span className="d-block">
                  {getSearchedPlaceTime(
                    currentWeather.dt,
                    currentWeather.timezone
                  )}
                </span>
              </h6>
              <ul
                className="list-group mt-5"
                style={{ background: "transparent" }}
              >
                <li className="list-group-item">
                  Description:{" "}
                  {currentWeather.weather[0].description
                    .charAt(0)
                    .toUpperCase() +
                    currentWeather.weather[0].description.slice(1)}
                </li>
                <li className="list-group-item">
                  Wind: {getCardinalDirection(currentWeather.wind.deg)},{" "}
                  {currentWeather.wind.speed} m/s
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
          <Link
            className="btn btn-dark"
            to={{ pathname: `/city/${currentWeather.id}` }}
          >
            5 Days Weather
          </Link>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default CurrentWeather;
