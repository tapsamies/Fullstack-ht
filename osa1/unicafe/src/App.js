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
        <Statistics name="good" count={good} />
        <Statistics name="neutral" count={neutral} />
        <Statistics name="bad" count={bad} />
        <Statistics name="all" count={good+bad+neutral} />
        <Statistics name="average" count={(good-bad)/(good+neutral+bad)} />
        <Statistics name="positive" count={100*good/(good+bad+neutral)+"%"} />
        
        </div>
    )

}

export default App;
