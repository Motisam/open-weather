import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [weather, setWeather] = useState(null);
    const city = "Munich";
    const apiKey = "cd9b4c6a5a6761e1af9c0ebe7c0e74b7"

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data);
            })
    }, [city, apiKey]);

    return (
        <div className="App">
            {weather ? (
                    <div>
                        <h1>Weather in {weather.name}</h1>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Humidity: {weather.main.humidity}%</p>
                        {/*<p>Weather: {weather.weather[0].description}</p>*/}
                    </div>
                ) :
                (<p>Weather Data is loading...</p>)
            }
        </div>
    );
}

export default App;
