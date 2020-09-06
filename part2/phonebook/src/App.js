import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      date: new Date().toISOString(),
      gender: Math.random() < 0.5 ? "Male" : "Female",
      id: persons.length + 1,
    };

    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </div>
  );
};

const Person = ({ person }) => {
  return <p>{person.name}</p>;
};

export default App;
