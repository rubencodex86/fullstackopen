//course information - 1st step (1.1a)
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

//course information - 1st step (1.1b)
/*
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
*/

//course information - 2nd step (1.2)
/*
const Header = (headerProp) => {
  return (
    <>
      <h1>{headerProp.course}</h1>
    </>
  )
}

const Part = (partProp) => {
  return (
    <p>{partProp.part} {partProp.exercise}</p>
  )
}

const Content = () => {
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10;
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
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
  const exercises1 = 10;
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
      <Header course={course} />
      <Content />
      <Total total={exercises1+exercises2+exercises3} />
    </>
  )
}
*/

//course information - 3rd step (1.3)
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
      <p>Number of exercises {part1.exercises+part2.exercises+part3.exercises}</p>
    </>
  )
}
*/

//course information - 4th step (1.4)
/*
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ partsB }) => {
  return (
    <div>
      <p>
        {partsB[0].name} {partsB[0].exercises}
      </p>
      <p>
        {partsB[1].name} {partsB[1].exercises}
      </p>
      <p>
        {partsB[2].name} {partsB[2].exercises}
      </p>
    </div>
  );
};

const Total = ({ partsC }) => {
  const totalExercises = partsC[0].exercises + partsC[1].exercises + partsC[2].exercises;
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content partsB={parts} /> //partsB == partsB from Content. variable must be the same.
      <Total partsC={parts} /> ////partsC == partsC from Total. variable must be the same.
    </div>
  );
};
*/

//course information - 5th step (1.5)
const Header = ({course}) => {
  return <h1>{course}</h1>;
};

const Content = ({parts}) => {
  return (
    <>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </>
  )
}

const Total = ({parts}) => {
  const sumExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <>
      <p>Number of exercises {sumExercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals o React',
        exercises: 10
      },
      {
        name: 'Using props ta pass data',
        exercises: 7
      },
      {
        name: 'State of component',
        exercises: 14
      },
    ]
  }
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App;
