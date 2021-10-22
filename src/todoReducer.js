const INITIAL_STATE = {todos:[]};
// const INITIAL_STATE = {todos:[{id: 1, task: "make bed", complete: true}, {id: 2, task: "fold laundry", complete: false}]};


const todoReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO": return {...state, todos: [...state.todos, {...action.payload}]};
    case "REMOVE_TODO": return {...state, todos: state.todos.filter(todo => todo.id !== action.id)};
    case "TOGGLE_COMPLETE": {
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.id) return {...todo, complete: !todo.complete};
        return todo;
        })
      }
    }
    case "EDIT_TODO": {
      return {...state, todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) return {...action.payload};
        return todo;
        })
      }
    }
    default: return state;
  }
}

export default todoReducer;