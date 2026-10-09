import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setweatherInfo] = useState({
    city: "NA",
    humidity: "",
    pressure: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    weather: "NA",
  });

  let updateInfo = (newInfo) => {
    setweatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp" style={{ textAlign: "center" }}>
      <div className="web-container">
        <h2 style={{ color: "black" }}>
          <br></br>
          <b>Weather App by Shriyash</b>
        </h2>
        <br></br>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
