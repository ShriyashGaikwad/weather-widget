import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww";
  let info = {
    city: "Pune",
    humidity: 54,
    pressure: 1015,
    temp: 28.04,
    tempMax: 28.04,
    tempMin: 28.04,
    weather: "Broken clouds",
  };
  return (
    <div className="InfoBox">
      <h1 style={{ color: "black" }}>Weather Info-</h1>
      <br></br>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 380 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={INIT_URL}
            title="broken clouds"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{info.city}</b>
            </Typography>
            <Typography variant="body2" color="text.primary" component={"span"}>
              <div>Temperature: {info.temp}&deg;C</div>
              <div>Humidity: {info.humidity}%</div>
              <div>Min Temp:: {info.tempMin}&deg;C</div>
              <div>Max Temp: {info.tempMax}&deg;C</div>
              <div>Pressure: {info.pressure} mb</div>
              <div>
                The weather can be described as: <i>{info.weather}</i>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
