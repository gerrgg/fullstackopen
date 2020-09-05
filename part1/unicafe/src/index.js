import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Button = ({ handleClick, text }) => (
  <button className={text.toLowerCase()} onClick={handleClick}>
    {text}
  </button>
);

const Stat = ({ header, value }) => (
  <tr>
    <th>{header}:</th>
    <td>{value}</td>
  </tr>
);

const Table = ({ data }) => (
  <table className="statistics">
    <tbody>
      {Object.keys(data).map((key, i) => (
        <Stat key={i} header={key} value={data[key]} />
      ))}
    </tbody>
  </table>
);

const Statistics = ({ data }) => {
  data.sum = Object.values(data).reduce((t, v) => t + v, 0);

  let avg = (data.good - data.bad) / data.sum;
  let positivityRate = data.good / data.sum;

  data.average = isNaN(avg) ? 0 : avg.toFixed(2);
  data.positive = isNaN(positivityRate) ? 0 : positivityRate.toFixed(2) + "%";

  const hasData = (e) => e !== 0;

  return Object.values(data).some(hasData) ? (
    <Table data={data} />
  ) : (
    <p>No data</p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let data = { good, neutral, bad };

  return (
    <div id="main">
      <h1>Give us feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h3>Statistics</h3>
      <Statistics data={data} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
