const Header = ({course}) => <h1>{course.name}</h1>
const Part = ({part}) => <p>{part.name} {part.exercises}</p>
const Content = ({course}) => <>{course.parts.map(part=><Part key={part.id} part={part}/>)}</>

const Total = ({course}) => {
  const total = course.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
      <p>Number of exercises {total}</p>
  )
}

const Course = ({course}) => {
  console.log(course)
  return(
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App