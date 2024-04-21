import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search_Box.css";
import { jsx } from "@emotion/react";

export const SearchBox = ({  }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "/api";
  const API_KEY = "f6627cff6a2bbd9d0da49efb15fd4355";

  let weatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();
      // console.log(jsonRes);
      let result = {
        city: city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      // console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(city);
      setCity("");
      let newInfo = await weatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="search_box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        <br />
        <br />
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
};
