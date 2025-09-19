import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        Coded by Anna Smirnova and is{" "}
        <a
          href="https://github.com/HannahSmirnova/new-weather-react-anna-smirnova.git"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
      </footer>
    </div>
  );
}
