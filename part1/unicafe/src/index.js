import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Stat = (props) => (
  <p>
    {props.header}: {props.value}
  </p>
);

const Statistics = (props) => {
  // loop the object of button clicks
  return (
    <div className="statistics">
      {Object.keys(props.data).map((key, i) => (
        <Stat key={i} header={key} value={props.data[key]} />
      ))}
    </div>
  );
};

const App = (props) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let data = { good, neutral, bad };

  return (
    <div>
      <h1>Give us feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
