import weatherData from "../data/weatherData"
import React from "react"

const WeatherInfo =()=>{

const [currentWeather, setCurrentWeather]= React.useState(weatherData[0])
// console.log(currentWeather)
    const handleClick = ()=>{
      let index= (currentWeather.id+1)%3
      setCurrentWeather(weatherData[index])
    }
    
    let icon
    if(currentWeather.condition==="Sunny"){
      icon="☀️"
    }
    else if(currentWeather.condition==="Rainy"){
      icon="🌧️"
    }
    else{
      icon="❄️"
    }
    return(
    <div className={`app-container ${currentWeather.condition.toLowerCase()}-background`}> 
      <div className="weather-container">
        <div className="icon">{icon}</div>
        <div className="condition-text">{currentWeather.condition}</div>
        <div className="temp-range-container">
            <div className="low-temp-container">
              <p className="low-temp-data">{currentWeather.lowTemp}</p>
              <p>Low</p>
            </div>
            <div className="high-temp-container">
              <p className="high-temp-data">{currentWeather.highTemp}</p>
              <p>High</p>
            </div>
        </div>
        <div className="day">{currentWeather.day}</div>
      </div>
      <button onClick={handleClick}>Test</button>
    </div>
    )
}

export default WeatherInfo