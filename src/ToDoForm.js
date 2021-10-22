import React, {useState} from 'react';
import './ToDoForm.css';

const ToDoForm = ({addToDo}) => {
  const initialData = {
    task: "",
    priority: ""
  }
  const [formData, setFormData] = useState(initialData);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addToDo(formData);
    setFormData(initialData);
  }

  return (
    <div className="ToDoForm">
      <form className="ToDoForm-form" onSubmit={handleSubmit}>
        <div className="ToDoForm-group">
          <label htmlFor="task">Task:</label>
          <input id="task" name="task" value={formData.task} type="text" onChange={handleChange} required />
          {/* <label htmlFor="priority">Priority:</label> */}
          <select name="priority" id="priority" value={formData.priority} onChange={handleChange} required>
            <option value="" disabled selected>Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="ToDoForm-group">
          <button>Save</button>
        </div>
      </form>
    </div>
  )
}

export default ToDoForm;