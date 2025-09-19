import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>Yorkton</h1>
      <ul>
        <li>Thursday 16:57</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/cloudy_light.svg"
            height="60"
            width="60"
            alt="Cloudy"
          ></img>
          14°C
        </div>
        <div className="col-6 second-column">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
