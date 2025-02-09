import { useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Stats value={[good, neutral, bad]} all={good + neutral + bad} />
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Stats = (props) => {
  console.log(props);
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.value[0]}</p>
      <p>neutral {props.value[1]}</p>
      <p>bad {props.value[2]} </p>
      <p>all {props.all} </p>
      <p>average {(props.value[0] - props.value[2]) / props.all}</p>
      <p>positive {(props.value[0] / props.all) * 100} %</p>
    </div>
  );
};

export default App;
