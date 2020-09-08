import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import Phonebook from "./Phonebook";
import Filter from "./Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const [newFilter, setNewFilter] = useState("");
  const handleNewFilter = (e) => setNewFilter(e.target.value);

  const handleDelete = (id) => {
    window.confirm(`Delete person ${id}?`)
      ? personService.remove(id).then((response) => {
          setPersons(
            persons.filter((person) =>
              person.id !== id ? person : response.data
            )
          );
        })
      : alert("we wont delete then");
  };

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
      <Phonebook peopleToShow={peopleToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
