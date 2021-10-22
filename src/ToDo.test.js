import { render, asFragment, fireEvent } from '@testing-library/react';
import ToDo from './ToDo';

let id, task, priority, complete, toggleComplete, editToDo, removeToDo;

beforeEach(() => {
  id = 1;
  task = "test task";
  priority = "medium"; 
  complete = false;
  toggleComplete = jest.fn();
  editToDo = jest.fn();
  removeToDo = jest.fn();
});

test('renders without crashing', () => {
  render(<ToDo id={id} task={task} priority={priority} complete={complete} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />);
});

test('matches snapshot', () => {
    const {asFragment} = render(<ToDo id={id} task={task} priority={priority} complete={complete} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />);
    expect(asFragment()).toMatchSnapshot();
});

test('renders todo', () => {
  const {queryByText} = render(<ToDo id={id} task={task} priority={priority} complete={complete} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />);
  expect(queryByText('test task')).toBeInTheDocument();
});


test('calls delete to do function', () => {
  const {queryByText, queryByTestId, debug} = render(<ToDo id={id} task={task} priority={priority} complete={complete} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />);
  expect(queryByText('test task')).toBeInTheDocument();

  const deleteBtn = queryByTestId("trash");
  fireEvent.click(deleteBtn);
  expect(removeToDo).toHaveBeenCalledTimes(1);
});


test('show edit form', () => {
  const {queryByText, queryByTestId, debug} = render(<ToDo id={id} task={task} priority={priority} complete={complete} toggleComplete={toggleComplete} editToDo={editToDo} removeToDo={removeToDo} />);
  expect(queryByText('test task')).toBeInTheDocument();

  const editBtn = queryByTestId("pen");
  fireEvent.click(editBtn);
  expect(queryByText('Save')).toBeInTheDocument();
});