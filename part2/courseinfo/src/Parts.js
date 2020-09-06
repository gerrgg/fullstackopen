import React from "react";

const Part = ({ name, exercises }) => (
  <p className="part">
    {name}: {exercises}
  </p>
);

const Parts = ({ parts }) => (
  <div className="parts">
    {parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

export default Parts;
