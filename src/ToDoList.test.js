import { render, asFragment } from '@testing-library/react';
import ToDoList from './ToDoList';

let todos;

beforeEach(() => {
  todos = [{key:1, task: "test task", priority: "medium"}, {key:2, task: "another test task", priority: "low"}];
})

test('renders without crashing', () => {
  render(<ToDoList todos={todos}/>);
});

test('matches snapshot', () => {
    const {asFragment} = render(<ToDoList todos={todos}/>);
    expect(asFragment()).toMatchSnapshot();
});

test('renders todos', () => {
  const {queryByText, debug} = render(<ToDoList todos={todos}/>);
  expect(queryByText('test task')).toBeInTheDocument();
  expect(queryByText('another test task')).toBeInTheDocument();
  // debug();
});
