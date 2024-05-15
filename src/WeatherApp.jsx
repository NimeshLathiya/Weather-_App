import React, { useState } from "react";
import { SearchBox } from "./SearchBox";
import { InfoBox } from "./InfoBox";

export const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Ahmedabad",
    feelsLike: 14.84,
    temp: 20.02,
    tempMin: 20.02,
    tempMax: 20.02,
    humidity: 68,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo();
  };

  return (
    <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>
      <h2> Weather App By Nimesh Lathiya</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};
