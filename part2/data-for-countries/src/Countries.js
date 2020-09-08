import React, { useState } from "react";
import Weather from "./Weather";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const Countries = ({ countries }) => {
  return countries.length === 1 ? (
    <CountryShow country={countries[0]} />
  ) : (
    countries.map((country, i) => <CountryIndex key={i} name={country.name} />)
  );
};

const CountryIndex = ({ name }) => {
  const [show, setShow] = useState(false);

  return <p>{name}</p>;
};
const Header = ({ name }) => <h1>{name}</h1>;
const Detail = ({ header, value }) => (
  <p>
    {capitalize(header)}: {value}
  </p>
);

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <h4>Languages</h4>
      <ul>
        {languages.map((language, i) => (
          <li key={i}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

const Flag = ({ src, alt }) => {
  return (
    <div className="flag">
      <h6>National Flag</h6>
      <img width={200} src={src} alt={alt} />
    </div>
  );
};

const CountryShow = ({ country }) => {
  console.log(country);
  let show = country[0];
  return (
    <div className="show">
      <Header name={show.name} />
      <Detail header="capital" value={show.capital} />
      <Detail header="Population" value={show.population} />
      <Languages languages={show.languages} />
      <Flag src={show.flag} alt={`${show.name}'s national flag`} />
      <Weather city={show.capital} />
    </div>
  );
};

export default Countries;
