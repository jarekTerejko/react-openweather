import React, { useState, createContext, useEffect } from "react";
import {apiKey} from './config'

export const WeatherContext = createContext()

const WeatherContextProvider = props => {
    const [city, setCity] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    const [FiveDaysWeather, setFiveDaysWeather] = useState(null)


    const getFiveDaysWeather = async city => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setFiveDaysWeather(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCurrentWeather = async city => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setCurrentWeather(data)
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    }

useEffect(() => {
    getFiveDaysWeather('warsaw')
    // return () => {
    //     cleanup
    // };
}, [])

useEffect(() => {
    getCurrentWeather('warsaw')
    // return () => {
    //     cleanup
    // };
}, [])

    return (
        <WeatherContext.Provider value={{city}}>
            {props.children}
        </WeatherContext.Provider>
    )
}


export default WeatherContextProvider