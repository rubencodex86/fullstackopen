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
    </>
  )
}
export default App;
