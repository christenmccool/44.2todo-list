import { render, asFragment, fireEvent } from '@testing-library/react';
import ToDoForm from './ToDoForm';


test('renders without crashing', () => {
  render(<ToDoForm />);
});

test('matches snapshot', () => {
  const {asFragment} = render(<ToDoForm />);    
  expect(asFragment()).toMatchSnapshot();
});

test('matches snapshot', () => {
  const addToDo = jest.fn();
  const {queryByLabelText, queryByText, debug} = render(<ToDoForm addToDo={addToDo}/>);    

  const task = queryByLabelText("Task:");
  const priority = queryByText("Select priority");
  const saveBtn = queryByText("Save");

  // fireEvent.change(task, {target: {value: 'Test task'}});
  // fireEvent.change(priority, {target: {value: 'medium'}});
  fireEvent.click(saveBtn);
  
  expect(addToDo).toHaveBeenCalledTimes(1);
});

