import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww";

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
