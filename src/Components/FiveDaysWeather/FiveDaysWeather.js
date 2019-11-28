import React, {useContext, useEffect} from 'react'
import { WeatherContext } from '../../WeatherContext'
import {
    getCardinalDirection,
    getSunriseOrSunset,
    displayCurrentDateTime,
    getSearchedPlaceTime
  } from "../../config";

const FiveDaysWeather = (props) => {
    console.log(props);
    
useEffect(() => {
    getFiveDaysWeather(props.match.params.cityId)
    // return () => {
    //     cleanup
    // };
}, [])

    const {fiveDaysWeather, getFiveDaysWeather} = useContext(WeatherContext)

    if (!fiveDaysWeather) {
        return (
            <h1>Loading</h1>
        )
    } else {
        console.log(fiveDaysWeather);
        
        return (
            <div>
             <div className="container">
        <div className="card text-center my-3">
          <div className="card-header">
            <h3>Hourly weather and forecasts in your city</h3>
            <h6><span style={{fontWeight: 300, fontSize: "12px"}}>Your Local Time:</span> {displayCurrentDateTime()}</h6>
          </div>
          </div>
          </div>
                <ul>
ok
                </ul>
            </div>
        )
    }

}

export default FiveDaysWeather
