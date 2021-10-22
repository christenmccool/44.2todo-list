import React from 'react';
import './ToDoList.css';
import ToDo from './ToDo';

const ToDoList = ({todos, toggleComplete, editToDo, removeToDo}) => {
  return (
    <div className="ToDoList">
      {todos.map(todo => <ToDo 
                            key={todo.id} 
                            id={todo.id} 
                            task={todo.task} 
                            priority={todo.priority} 
                            complete={todo.complete} 
                            toggleComplete={() => toggleComplete(todo.id)}
                            editToDo={editToDo}
                            removeToDo={() => removeToDo(todo.id) } 
                          />)}
    </div>
  )
}

export default ToDoList;