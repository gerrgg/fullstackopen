import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  // start each anecdote at 0 votes
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  // pick a random index
  const nextHandler = () => {
    let random = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(random);
  };

  // keep track of which ancedote is being voted for
  const voteHandler = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const getIndexOfHighestVotedAnecdote = () =>
    votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Vote for anecdote</h2>
      <Anecdote className="current" text={anecdotes[selected]} />
      <Button clickHandler={() => voteHandler()} text="Vote" />
      <Button clickHandler={() => nextHandler()} text="Next" />
      <hr />
      <h4>Top voted</h4>
      <Anecdote
        className="winner"
        text={anecdotes[getIndexOfHighestVotedAnecdote()]}
      />
    </div>
  );
};

const Button = ({ clickHandler, text }) => (
  <button className={text.toLowerCase()} onClick={clickHandler}>
    {text}
  </button>
);

const Anecdote = ({ className, text }) => <p className={className}>"{text}"</p>;

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
