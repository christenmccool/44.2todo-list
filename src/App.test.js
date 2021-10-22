import { render, asFragment,fireEvent } from '@testing-library/react';
import todoReducer from './todoReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';


const store = createStore(todoReducer);

test('renders without crashing', () => {
  render(<Provider store={store}><App /></Provider>);
});

test('matches snapshot', () => {
  const {asFragment} = render(<Provider store={store}><App /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});

test('shows heading and button', () => {
  const {queryByText} = render(<Provider store={store}><App /></Provider>);
  expect(queryByText('To Do List')).toBeInTheDocument();
  expect(queryByText('New To Do Form')).toBeInTheDocument();
});

test('show and hide form on button click', () => {
  const {queryByText} = render(<Provider store={store}><App /></Provider>);
  expect(queryByText('Task:')).not.toBeInTheDocument();

  const showBtn = queryByText('New To Do Form');
  fireEvent.click(showBtn);
  expect(queryByText('Task:')).toBeInTheDocument();
  expect(queryByText('Select priority')).toBeInTheDocument();

  fireEvent.click(showBtn);
  expect(queryByText('Task:')).not.toBeInTheDocument();
  expect(queryByText('Select priority')).not.toBeInTheDocument();
});
