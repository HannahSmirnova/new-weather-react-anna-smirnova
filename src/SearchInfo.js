import FormattedDate from "./FormattedDate";

export default function SearchInfo(props) {
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
            src={props.info.icon_url}
            height="80"
            width="80"
            alt={props.info.description}
          />
          {Math.round(props.info.temperature)}°C
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
