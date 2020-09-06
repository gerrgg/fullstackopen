import React from "react";
import Parts from "./Parts";

const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ total }) => <p>Total: {total}</p>;

const Courses = ({ courses }) => {
  return courses.map((course) => <Course key={course.id} course={course} />);
};

const Course = ({ course }) => {
  // add up all the exercises, add a ,0 at the end to prevent errors
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <div className="course">
      <Header name={course.name} />
      <Parts parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default Courses;
