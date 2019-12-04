import React, { useState, createContext, useEffect } from "react";
import {apiKey} from './config'

export const WeatherContext = createContext()

const WeatherContextProvider = props => {
    const [city, setCity] = useState('')
    const [currentWeather, setCurrentWeather] = useState(null)
    const [fiveDaysWeather, setFiveDaysWeather] = useState(null)
    const [loading, setLoading] = useState(false)


    const getFiveDaysWeather = async id => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setFiveDaysWeather(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const getCurrentWeather = async city => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setCurrentWeather(data)
            console.log("city", data)
            
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    const getCurrentWeatherById = async id => {
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setCurrentWeather(data)
            console.log("id", data)
            
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    // const handleChange = (e) => {
    //     setCity(e.target.value)
    //     console.log(city)
    // }

    const submitForm = e => {
        e.preventDefault()
        if(city) {
        getCurrentWeather(city)
        }
        
        // getFiveDaysWeather(city)

    }

// useEffect(() => {
//     getFiveDaysWeather('warsaw')
//     // return () => {
//     //     cleanup
//     // };
// }, [])

useEffect(() => {
    // getCurrentWeather('warsaw')
    // return () => {
    //     cleanup
    // };
}, [])

const isNight = (time, timezone) => {
    const date = new Date(time * 1000 + timezone * 1000);
    return date.getHours() > 22 || date.getHours() < 6;
  };

    return (
        <WeatherContext.Provider value={{city, setCity, submitForm, currentWeather, fiveDaysWeather, getFiveDaysWeather, isNight, getCurrentWeather, getCurrentWeatherById, loading}}>
            {props.children}
        </WeatherContext.Provider>
    )
}


export default WeatherContextProvider