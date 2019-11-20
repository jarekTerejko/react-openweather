import React, {useContext} from 'react';
import WeatherContextProvider from './WeatherContext';
import { Home } from './Components/Home';
// import {WeatherContext} from './WeatherContext'


function App() {




  return (
    <WeatherContextProvider>
      App
      <Home/>
    </WeatherContextProvider>
  );
}

export default App;
