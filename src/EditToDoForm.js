import React, {useState} from 'react';
import './EditToDoForm.css';

const EditToDoForm = ({id, task, priority, complete, editToDo, hideForm}) => {
  const initialData = {
    task: task,
    priority: priority
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editToDo({id, ...formData, complete});
    hideForm();
  }

  return (
    <div className="EditToDoForm">
      <form className="EditToDoForm-form" onSubmit={handleSubmit}>
        <div className="EditToDoForm-group">
          <input id="task" name="task" placeholder="Task" value={formData.task} type="text" onChange={handleChange} required />
          <select name="priority" id="priority" value={formData.priority} onChange={handleChange} required>
            <option value="" disabled selected>Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditToDoForm;