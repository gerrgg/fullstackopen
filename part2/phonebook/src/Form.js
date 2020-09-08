import React, { useState } from "react";
import personService from "./services/persons";

const Form = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNewName = (e) => setNewName(e.target.value);
  const handleNewNumber = (e) => setNewNumber(e.target.value);

  const handleUpdate = (id, newPerson) => {
    personService
      .update(id, newPerson)
      .then((updatedPerson) => {
        setPersons(
          persons.map((person) => (person.id !== id ? person : updatedPerson))
        );
      })
      .catch((error) => {
        console.log(`updatingfg person failed`, error);
      });
  };

  const handleNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      dateAdded: new Date().toISOString(),
    };

    // if the filtered array is not 0 - there is a duplicate
    const duplicates = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    duplicates.length !== 0
      ? handleUpdate(duplicates[0].id, newPerson)
      : personService
          .create(newPerson)
          .then((createdPerson) => setPersons(persons.concat(createdPerson)))
          .catch((error) => {
            console.log("creating person failed", error);
          });

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
