import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };


  const completedTask  = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true }
        } else {
            return task;
          }
        })
    )
  }

  return (
    <div className="App">
      <div className="addText">
        <input onChange={handleChange} />
        <button onClick={addTask}>add task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
