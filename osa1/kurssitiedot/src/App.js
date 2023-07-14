const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>




        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) =>{
    console.log(props)
    return(
    <div>
        <h1>
            {props.course}
        </h1>
    </div>
    )
}

const Content = (props) =>{
    console.log(props)
    return(
    <div>   
        <Part pp={props.parts} />
    </div>
)
}

const Part = (props) =>{
    console.log(props)
return(
    <div>
        <p>{props.pp[0].name} {props.pp[0].exercises}</p>
        <p>{props.pp[1].name} {props.pp[1].exercises}</p>
        <p>{props.pp[2].name} {props.pp[2].exercises}</p>
        
    </div>
)
}

const Total = (props) =>{
    console.log(props)
    return(
    <div>
        <p>
            number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}
        </p>
    </div>
)
}
export default App
