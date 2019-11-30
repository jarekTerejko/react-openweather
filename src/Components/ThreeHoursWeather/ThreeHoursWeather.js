import React, { useContext } from "react";
import { WeatherContext } from "../../WeatherContext";
import {
  getCardinalDirection,
  getSunriseOrSunset,
  displayCurrentDateTime,
  getSearchedPlaceTime,
  roundTemp
} from "../../config";

const ThreeHoursWeather = ({ threeHours }) => {
  console.log(threeHours);

  const { fiveDaysWeather } = useContext(WeatherContext);

  if (fiveDaysWeather && threeHours) {
    return (
      <li className="list-group-item">
      <div className="hours-weather-cont">
        <div className="list-group-item__left">
          <img
            src={`http://openweathermap.org/img/wn/${threeHours.weather[0].icon}@2x.png`}
            alt={threeHours.weather[0].description}
            title={threeHours.weather[0].description}
            style={{width: "50px", height: "50px"}}
          />
          <span style={{fontSize: "14px"}}>{getSearchedPlaceTime(
            threeHours.dt,
            fiveDaysWeather.city.timezone
          )}
          </span>
        </div>
        <div className="list-group-item__right">
            <p><span className="badge badge-success">{roundTemp(threeHours.main.temp)}&deg;C</span> <span className="badge badge-secondary">{threeHours.weather[0].description.charAt(0).toUpperCase() +
                  threeHours.weather[0].description.slice(1)}</span></p>
                  <p><span className="badge badge-warning">{getCardinalDirection(threeHours.wind.deg)}, {threeHours.wind.speed} m/s</span> <span className="badge badge-primary">{threeHours.main.pressure} hPa</span></p>
        </div>
        </div>
      </li>
    );
  }
};

export default ThreeHoursWeather;
