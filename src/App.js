import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div classname="App">
      <h1>
        <Weather />
      </h1>
      <div ClassName="container"></div>
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
