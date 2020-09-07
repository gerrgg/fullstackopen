import React from "react";

const Person = ({ person }) => {
  return (
    <p>
      {person.name} - {person.number}
    </p>
  );
};

const Phonebook = ({ peopleToShow }) =>
  peopleToShow.length > 0 ? (
    peopleToShow.map((person, i) => <Person key={i} person={person} />)
  ) : (
    <p>No match</p>
  );

export default Phonebook;
