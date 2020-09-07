import React from "react";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

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

const Header = ({ name }) => <h1>{name}</h1>;
const Detail = ({ header, value }) => (
  <p>
    {capitalize(header)}: {value}
  </p>
);

const CountryDetails = ({ country }) => {
  console.log(country);
  return (
    <div class="show">
      <Header name={country.name} />
      <Detail header="capital" value={country.capital} />
      <Detail header="Population" value={country.population} />
      <h4>Languages</h4>
      <ul>
        {country.languages.map((language) => (
          <li>{language.name}</li>
        ))}
      </ul>
      <h6>National Flag</h6>
      <img
        width={200}
        src={country.flag}
        alt={`${country.name}'s national flag`}
      />
    </div>
  );
};

export default Countries;
