import React from "react";

const Countries = ({ countries }) => {
  return countries.length === 1 ? (
    <CountryDetails country={countries[0]} />
  ) : (
    countries.map((country, i) => (
      <CountryListItem key={i} name={country.name} />
    ))
  );
};

const CountryListItem = ({ name }) => <p>{name}</p>;

const CountryDetails = ({ country }) => {
  console.log(country);
  return (
    <div class="show">
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h4>Languages</h4>
    </div>
  );
};

export default Countries;
