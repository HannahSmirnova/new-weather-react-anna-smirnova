import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import "./Responsive.css";
import { useState } from "react";

export default function SearchInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheitTemp() {
    return (props.info.temperature * 9) / 5 + 32;
  }

  return (
    <div className="SearchInfo">
      <div className="row">
        <div className="col-12 col-md-4 order-1 order-md-1">
          <h1>{props.info.city}</h1>
          <ul className="pt-3 ps-1">
            <li>
              <FormattedDate date={props.info.date} city={props.info.city} />
            </li>
            <li className="text-capitalize pt-1">{props.info.description}</li>
          </ul>
        </div>
        <div className="col-12 col-md-8 order-2 order-md-2">
          <WeatherForecast coordinates={props.info.coordinates} />
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <img
            className="pb-2"
            src={props.info.icon_url}
            height="80"
            width="80"
            alt={props.info.description}
          />
          <span className="temperature-value">
            {" "}
            {unit === "celsius"
              ? `${Math.round(props.info.temperature)}`
              : `${Math.round(fahrenheitTemp())}`}
          </span>
          <span className="unit-toggle">
            {unit === "celsius" ? (
              <span className="active-unit">°C</span>
            ) : (
              <a href="/" onClick={showCelsius} className="inactive-unit">
                °C
              </a>
            )}
            <span className="divider"> | </span>

            {unit === "fahrenheit" ? (
              <span className="active-unit">°F</span>
            ) : (
              <a href="/" onClick={showFahrenheit} className="inactive-unit">
                °F
              </a>
            )}
          </span>
        </div>

        <div className="col-6 second-column">
          <ul className="weather-details">
            <li>Humidity: {props.info.humidity}%</li>
            <li className="pt-1">Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
