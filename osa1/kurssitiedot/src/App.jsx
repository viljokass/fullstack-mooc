const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  const part = props.part
  return (
    <>
      <p>{part.name} {part.excercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  const parts = props.course.parts
  const result = []
  parts.forEach(part=>{
    result.push(<Part part={part} />)
  })
  return (
    <>
      {result}
    </>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.course.parts.reduce((acc, curr) => acc + curr.excercises, 0)
  return (
    <div>
      <p>Number of excercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      },
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App