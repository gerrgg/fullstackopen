import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Countries from "./Countries";
import Filter from "./Filter";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  // if theres a flter get the filtered list - otherwise show all
  const countriesToShow = filter
    ? countries.filter((country) =>
        // lowercase the name and the filter to make search case insensitive
        country.name.toLowerCase().includes(filter.toLowerCase())
      )
    : countries;

  return (
    <div>
      <h1>Countries</h1>
      <p>
        Filter:
        <Filter filter={filter} setFilter={setFilter} />
      </p>
      <h4>Results</h4>
      {countriesToShow.length < 10 ? (
        <Countries countries={countriesToShow} />
      ) : (
        <Error message="Too many results, please narrow" />
      )}
    </div>
  );
};

const Error = ({ message }) => <p>{message}</p>;

ReactDOM.render(<App />, document.getElementById("root"));
