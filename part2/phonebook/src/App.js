import React, { useState } from "react";
import Form from "./Form";
import Phonebook from "./Phonebook";
import Filter from "./Filter";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newFilter, setNewFilter] = useState("");
  const handleNewFilter = (e) => setNewFilter(e.target.value);

  // if theres a flter get the filtered list - otherwise show all
  const peopleToShow = newFilter
    ? persons.filter((person) =>
        // lowercase the name and the filter to make search case insensitive
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleNewFilter={handleNewFilter} />
      <h3>Add a new person</h3>
      <Form persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Phonebook peopleToShow={peopleToShow} />
    </div>
  );
};

export default App;
