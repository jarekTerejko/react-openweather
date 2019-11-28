import React, { useContext } from "react";
import { WeatherContext } from "../WeatherContext";
import SearchCity from "./SearchCity/SearchCity";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather/FiveDaysWeather";

const Home = () => {
  return (
    <>
      <SearchCity />
      <CurrentWeather />
      {/* <FiveDaysWeather/> */}
    </>
  );
};

export default Home;
