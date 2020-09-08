import React, { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./Countries";

const Error = ({ message }) => <p>{message}</p>;

const Weather = ({ city }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  return typeof weather.name !== "undefined" ? (
    <WeatherShow weather={weather} />
  ) : (
    <Error message={"Weather stuff not found :/"} />
  );
};

const WeatherShow = ({ weather }) => {
  const convertToF = (kelvin) => ((9 / 5) * kelvin - 459.67).toFixed(1) + "°F";
  const feelsLike = convertToF(weather.main.feels_like);

  return (
    <div className="weather">
      <h4>The weather in {weather.name}</h4>
      <Detail header={"Feels like"} value={feelsLike} />
      <Detail header={"Wind"} value={weather.wind.speed} />
    </div>
  );
};

export default Weather;
