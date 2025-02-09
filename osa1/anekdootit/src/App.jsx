import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [value, setValue] = useState(new Uint8Array(8));

  const handleVote = () => {
    const copy = [...value];
    copy[selected] += 1;
    setValue(copy);
  };

  const anecdoteWithMostVotes = anecdotes[value.indexOf(Math.max(...value))];
  console.log(value, anecdoteWithMostVotes);
  return (
    <div>
      <Header />
      {anecdotes[selected]}
      <Votes votes={value[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button
        onClick={() => setSelected(getRandomIntInclusive(0, 7))}
        text="next anecdote"
      />
      <MostWotes
        mostWotes={anecdotes[value.indexOf(Math.max(...value))]}
        voteCount={value[value.indexOf(Math.max(...value))]}
      />
    </div>
  );
};

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const Header = () => {
  return <h1>Anecdote of the day</h1>;
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Votes = (props) => {
  console.log(props);
  return <p>has {props.votes} votes</p>;
};

const MostWotes = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{props.mostWotes}</p>
      <p>has {props.voteCount} votes</p>
    </div>
  );
};

export default App;
