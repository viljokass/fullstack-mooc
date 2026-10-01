const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.excercises}</p>
    </>
  )
}

const Content = (props) => {
  const parts = props.part
  const excercises = props.excercises
  return (
    <>
      <Part part={parts[0]} excercises={excercises[0]}/>
      <Part part={parts[1]} excercises={excercises[1]}/>
      <Part part={parts[2]} excercises={excercises[2]}/>
    </>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={[part1, part2, part3]} excercises={[exercises1, exercises2, exercises3]}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App