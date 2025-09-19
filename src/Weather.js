import { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Friday 15:00",
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city name"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark pe-3 ps-3"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="pt-3 ps-1">
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.icon_url}
              height="80"
              width="80"
              alt={weatherData.description}
            ></img>
            {Math.round(weatherData.temperature)}°C
          </div>
          <div className="col-6 second-column">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=Regina&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <p>Loading...</p>;
  }
}
