import React, {useContext, useEffect} from 'react'
import { WeatherContext } from '../../WeatherContext'
import {
    getCardinalDirection,
    getSunriseOrSunset,
    displayCurrentDateTime,
    getSearchedPlaceTime
  } from "../../config";
import normal from '../../img/normal.jpg'

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
        document.body.style.backgroundImage = `url(${normal})`

        return (
            <div>
             <div className="container">
        <div className="card text-center my-3">
          <div className="card-header">
            <h3>Hourly weather and forecasts</h3>
            <h6><span style={{fontWeight: 300, fontSize: "12px"}}>Your Local Time:</span> {displayCurrentDateTime()}</h6>
          </div>
          <div className="card-body">
              
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
