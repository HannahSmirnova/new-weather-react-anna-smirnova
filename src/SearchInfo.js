import FormattedDate from "./FormattedDate";
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
      <h1>{props.info.city}</h1>
      <ul className="pt-3 ps-1">
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
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
            {" | "}
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
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
