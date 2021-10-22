import React, {useState} from 'react';
import './ToDo.css';
import EditToDoForm from './EditToDoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const ToDo = ({id, task, priority, complete, toggleComplete, editToDo, removeToDo}) => {
  const [showForm, setShowForm] = useState(false);

  let todoClass =  priority==='high' ? "ToDo ToDo-high" : (priority==='medium' ? "ToDo ToDo-medium" :  "ToDo ToDo-low");
  todoClass = complete ? todoClass + " ToDo-complete" : todoClass;

  const hideForm = () => {
    setShowForm(false);
  }

  let editForm = showForm ? <EditToDoForm id={id} task={task} priority={priority} complete={complete} editToDo={editToDo} hideForm={hideForm} /> : null;

  const handleClick = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="ToDo">
      <span onClick={toggleComplete} className={todoClass}>{task}</span>
      <FontAwesomeIcon icon={faTrash} className="ToDo-icon" onClick={removeToDo} data-testid="trash"/>
      <FontAwesomeIcon icon={faPen} className="ToDo-icon" onClick={handleClick} data-testid="pen"/>
      {editForm}
    </div>
  )
}

export default ToDo;