import React, { useState } from "react";


interface CounterProps {
  amount: number;
}

function UncompleteCounter(props: CounterProps) {
  return (
    <div style={{margin: "10px"}}>
      <h1>{props.amount}</h1>
    </div>
  );
}

interface TaskProps {
  id: number;
  text: string;
}

function Task(props: TaskProps) {
  const [complete, setCoplete] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    
      const nextState = !complete;
      if (nextState == false) {

      }
      setCoplete(nextState)

      console.log(`set ${props.text} ${nextState}`);
  };

  return (
    <div style={{display: "flex", flexDirection: "row", gap: "20px", justifyContent: "space-around"}}>
      <div style={{display: "flex", flexDirection: "row", gap: "20px", justifyContent: "flex-start"}}>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={handleClick}></input>
        <h5>{props.text}</h5>
      </div>
    </div>
  );
}

const tasks = [
  {id: 0, text: "Umycie psa"},
  {id: 1, text: "Odkurzenie kota"}
];

function TaskList() {
  const [count, setCount] = useState(0);


  return (
    
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
          />
        ))}
        <UncompleteCounter amount={count}></UncompleteCounter>
      </div>
  );
}

function App() {
  return (
    <div>
      <h1>To Do</h1>
      <input type="text" style={{width: "70%"}} id="taskInput"></input><button>DODAJ +</button>
      <TaskList></TaskList>

    </div>
  );
}

export default App
