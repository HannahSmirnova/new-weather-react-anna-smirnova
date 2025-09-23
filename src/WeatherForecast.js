import { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import sunnyAnimation from "./animations/sunny.json";
import cloudyAnimation from "./animations/cloudy.json";
import rainyAnimation from "./animations/rainy.json";

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

  function getAnimation(icon) {
    if (icon.includes("clear")) return sunnyAnimation;
    if (icon.includes("cloud")) return cloudyAnimation;
    if (icon.includes("rain")) return rainyAnimation;
    return sunnyAnimation;
  }

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
                <Lottie
                  animationData={getAnimation(day.condition.icon)}
                  loop={true}
                  style={{ height: 40, width: 40 }}
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
