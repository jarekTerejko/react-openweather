import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../../WeatherContext";
import { displayCurrentDateTime } from "../../config";
import normal from "../../img/normal.jpg";
import ThreeHoursWeather from "../ThreeHoursWeather/ThreeHoursWeather";
import WeatherWidget from "../WeatherWidget/WeatherWidget";
import Loader from "../../Loader/Loader";

const FiveDaysWeather = props => {
  // console.log(props);

  useEffect(() => {
    getFiveDaysWeather(props.match.params.cityId);
  }, []);

  useEffect(() => {
    if (currentWeather === null) {
      getCurrentWeatherById(props.match.params.cityId);
    }
  }, []);

  const {
    fiveDaysWeather,
    getFiveDaysWeather,
    currentWeather,
    getCurrentWeatherById,
    loading
  } = useContext(WeatherContext);

  if (!fiveDaysWeather) {
    return <Loader />;
  } else {
    // console.log(fiveDaysWeather);
    document.body.style.backgroundImage = `url(${normal})`;
    return (
      <div>
        <div className="container">
          <div style={{ maxWidth: "540px" }} className="card my-3 mx-auto">
            <div className="card-header  text-center">
              <h3>Hourly weather and forecasts</h3>
              <h6>
                <span style={{ fontWeight: 300, fontSize: "12px" }}>
                  Your Local Time:
                </span>{" "}
                {displayCurrentDateTime()}
              </h6>
            </div>
            <div className="card-body">
              <WeatherWidget />
              <ul className="list-group mt-5">
                {fiveDaysWeather.list.map((threeHours, i) => {
                  return <ThreeHoursWeather key={i} threeHours={threeHours} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default FiveDaysWeather;
