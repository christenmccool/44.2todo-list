import React, {useState}  from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { v4 as uuid } from 'uuid';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);

  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const addToDo = (todo) => {
    const newTodo = {...todo, complete: false, id: uuid()};
    dispatch({type: 'ADD_TODO', payload:newTodo});
  }

  const toggleComplete = (id) => {
    dispatch({type: 'TOGGLE_COMPLETE', id});
  }

  const editToDo = (editedTodo) => {
    dispatch({type: 'EDIT_TODO', payload: editedTodo});
  }

  const removeToDo = (id) => {
    dispatch({type: 'REMOVE_TODO', id});
  }

  const handleClick = () => {
    setShowForm(!showForm);
  }


  return (
    <div className="App">
      <h1 className="App-heading">To Do List</h1>
      <ToDoList todos={todos} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />
      <button className="App-button" onClick={handleClick}>New To Do Form</button>
      {showForm ? <ToDoForm addToDo={addToDo} /> : null}
    </div>
  );
}

export default App;
