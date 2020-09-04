import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.data.map((part) => (
        <Part part={part.name} exercise={part.exercise} />
      ))}
    </div>
  );
};

const Total = (props) => <p>Number of exercises {props.sum}</p>;

const App = () => {
  const course = {
    name: "Half stack application development",

    data: [
      { name: "Fundamentals of React", exercise: 10 },
      { name: "Using props to pass data", exercise: 7 },
      { name: "State of a component", exercise: 14 },
    ],
  };

  // reduce will loop through the array - performing the function given and passing the result to the next loop in the array
  const sum = course.data.reduce(
    (partial_sum, a) => partial_sum + a.exercise,
    0
  );

  return (
    <div>
      <Header course={course.name} />
      <Content data={course.data} />
      <Total sum={sum} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
