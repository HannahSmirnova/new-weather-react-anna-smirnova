import { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      console.log("Full forecast response:", response.data);
      setForecast(response.data.daily);
      setLoaded(true);
    });
  }, [props.coordinates]);

  if (!loaded || !forecast || !Array.isArray(forecast)) {
    return null;
  }

  return (
    <div className="row forecast-inline">
      {forecast.map((day, index) => {
        if (index > 0 && index < 7) {
          return (
            <div className="col-2" key={index}>
              <div className="WeatherForecast-day">
                {new Date(day.time * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </div>
              <div className="WeatherForecast-icon">
                <img
                  height="40"
                  width="40"
                  alt={day.condition.description}
                  src={day.condition.icon_url}
                />
              </div>
              <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">
                  {Math.round(day.temperature.maximum)}°
                </span>
                <span className="divider-forecast"> | </span>
                <span className="WeatherForecast-temp-min">
                  {Math.round(day.temperature.minimum)}°
                </span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
