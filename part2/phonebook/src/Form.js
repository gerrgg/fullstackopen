import React, { useState } from "react";

const randomGender = () => (Math.random() < 0.5 ? "M" : "F");

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);
  const handleNewFilter = (e) => setNewFilter(e.target.value);

  const handleNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      dateAdded: new Date().toISOString(),
      gender: randomGender(),
      id: persons.length + 1,
    };

    // if the filtered array is not 0 - there is a duplicate
    const isDupe =
      persons.filter((person) => person.name === newName).length !== 0;

    isDupe
      ? alert(`${newName} already exists`)
      : setPersons(persons.concat(newPerson));

    // clear fields
    setNewName("");
    setNewNumber("");
  };

  return (
    <form onSubmit={handleNewPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
        <br />
        number: <input value={newNumber} onChange={handleNewNumber} />
        <br />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
