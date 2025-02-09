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
  if (props.all === 0)
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedbacks given</p>
      </div>
    );

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={props.value[0]} />
        <StatisticLine text="neutral" value={props.value[1]} />
        <StatisticLine text="bad" value={props.value[2]} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine
          text="average"
          value={(props.value[0] - props.value[2]) / props.all}
        />
        <StatisticLine
          text="positive"
          value={(props.value[0] / props.all) * 100}
        />
      </table>
    </div>
  );
};

const StatisticLine = (props) => {
  console.log(props);
  if (props.text === "positive")
    return (
      <tfoot>
        <tr>
          <td>{props.text}</td>
          <td>&nbsp;</td>
          <td>{props.value}%</td>
        </tr>
      </tfoot>
    );
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>&nbsp;</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  );
};
export default App;
