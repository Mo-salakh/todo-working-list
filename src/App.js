import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import ToDoForm from './toDoForm';
import ToDo from './toDo';

function App() {

  const[todos, setTodos] = useState([])

  const addTask = (text) => {
    if(text) {
      const newList = {
        id : Math.random().toString(36).substr(2, 9),
        task : text ,
        complete: false
      }
      setTodos([...todos, newList])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const toggleTask = (id) => {
    setTodos(
      [
        ...todos.map(todo => todos.id === id ? {
          ...todo,
          complete: !todo.complete
        }:{...todo} )
      ]
    )
  }

  return (
    <div className="App">
      <header className='container p-4'>
        <h3>Количество задач - {todos.length}</h3>
      </header>
      {
      todos.map((todo, index) => {
        return (
          <div className='container p-3 d-flex flex-direction-between'>
          <ToDo
          key={todo.id}
          todo={todo}
          removeTask={removeTask}
          toggleTask = {toggleTask}/>
          </div>
       )
        })
      }
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
