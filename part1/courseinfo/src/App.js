//course information - 1st step (1a)
/*
const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack';
  const part1 = 'Fundamentos da biblioteca React';
  const exercises1 = 10;
  const part2 = 'Usando props para passar dados';
  const exercises2 = 7;
  const part3 = 'Estado de um componente';
  const exercises3 = 14;
  
  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  )
}
*/

//course information - 1st step (1b)
const Header = (headerProp) => {
  return (
    <>
      <h1>{headerProp.course}</h1>
    </>
  )
}

const Content = (contentProp) => {
  return (
    <>
      <p>{contentProp.part} {contentProp.exercise}</p>
    </>
  )
}

const Total = (totalProp) => {
  return (
    <>
      <p>Number of exercises {totalProp.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10;
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total total={exercises1+exercises2+exercises3} />
    </>
  )
}

export default App;
