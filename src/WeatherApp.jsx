import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp" style={{ textAlign: "center" }}>
      <div className="web-container">
        <h2 style={{ color: "black" }}>
          <br></br>
          <b>Weather App by Shriyash</b>
        </h2>
        <br></br>
        <SearchBox />
        <InfoBox />
      </div>
    </div>
  );
}
