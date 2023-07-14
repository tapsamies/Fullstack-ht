import { useState } from 'react'

const Statistics = (props)=>{
    return (
        <div>
        <p> {props.name} {props.count}</p>
        </div>
    )
}


const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

    return (
        <div>
        <h1>give feedback</h1>
        <button onClick={()=>setGood(good+1)}>good</button> 
        <button onClick={()=>setNeutral(neutral+1)}>neutral</button> 
        <button onClick={()=>setBad(bad+1)}>bad</button> 
        <h1>statistics</h1>
        <p>good {good}</p> 
        <p>neutral {neutral}</p> 
        <p>bad {bad}</p> 
        <p>all {good+bad+neutral}</p>
        <p>average {(good-bad)/(good+neutral+bad)}</p>
        <p>positive {100*good/(good+bad+neutral)}%</p>
        <Statistics name={good} count={good} />
        </div>
    )

}

export default App;
