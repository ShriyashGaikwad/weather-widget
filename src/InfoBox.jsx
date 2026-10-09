import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww";

  const HOT_URL =
    "https://images.unsplash.com/photo-1545955413-209e03defb1f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1548097160-627fd636ee56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1692362385851-cf68a6d9604b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <h2 style={{ color: "black" }}>
        Weather Info - <i>{info.weather}</i>
      </h2>

      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
            background: "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
          }}
        >
          <CardMedia
            sx={{ height: 160 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 28
                  ? HOT_URL
                  : info.temp > 22
                    ? INIT_URL
                    : info.temp < 22
                      ? COLD_URL
                      : INIT_URL
            }
            title="broken clouds"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <b>{info.city}</b>
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 28 ? (
                  <SunnyIcon />
                ) : info.temp > 22 ? (
                  <WbCloudyIcon />
                ) : info.temp < 22 ? (
                  <AcUnitIcon />
                ) : (
                  <WbCloudyIcon />
                )}
              </span>
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
