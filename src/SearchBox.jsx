import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import Alert from "@mui/material/Alert";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fc2408fc0955a95dabd7941b6686d3a7";

  let getWeatherInfo = async (city) => {
    try {
      setError(false);
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
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
      {error && (
        <Alert
          severity="error"
          onClose={() => setError(false)}
          sx={{
            //width: "fit-content",
            //maxWidth: "100px",
            display: "inline-flex",
            width: "250px",
            my: 2,
          }}
        >
          No such place try again!
        </Alert>
      )}
      <br></br>
    </div>
  );
}
