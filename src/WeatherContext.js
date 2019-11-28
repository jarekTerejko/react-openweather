import React, { useState, createContext, useEffect } from "react";
import {apiKey} from './config'

export const WeatherContext = createContext()

const WeatherContextProvider = props => {
    const [city, setCity] = useState('')
    const [currentWeather, setCurrentWeather] = useState(null)
    const [fiveDaysWeather, setFiveDaysWeather] = useState(null)


    const getFiveDaysWeather = async id => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}&units=metric`)
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

    // const handleChange = (e) => {
    //     setCity(e.target.value)
    //     console.log(city)
    // }

    const submitForm = e => {
        e.preventDefault()
        getCurrentWeather(city)
        // getFiveDaysWeather(city)

    }

// useEffect(() => {
//     getFiveDaysWeather('warsaw')
//     // return () => {
//     //     cleanup
//     // };
// }, [])

useEffect(() => {
    getCurrentWeather('warsaw')
    // return () => {
    //     cleanup
    // };
}, [])

    return (
        <WeatherContext.Provider value={{city, setCity, submitForm, currentWeather, fiveDaysWeather, getFiveDaysWeather}}>
            {props.children}
        </WeatherContext.Provider>
    )
}


export default WeatherContextProvider