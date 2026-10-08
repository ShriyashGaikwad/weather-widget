import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";

  const API_KEY = "fc2408fc0955a95dabd7941b6686d3a7";

  let getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );
    let jsonResponse = await response.json();
    let result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo(city);
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather!</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
