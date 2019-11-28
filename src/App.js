import React from "react";
import WeatherContextProvider from "./WeatherContext";
import Home from "./Components/Home";
import FiveDaysWeather from "./Components/FiveDaysWeather/FiveDaysWeather";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "weather-icons/css/weather-icons.css";
// import {WeatherContext} from './WeatherContext'

function App() {
  return (
    <BrowserRouter>
      <WeatherContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:cityId" component={FiveDaysWeather} />
        </Switch>
      </WeatherContextProvider>
    </BrowserRouter>
  );
}

export default App;
