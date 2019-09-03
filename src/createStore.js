import candyReducer from './reducers/candyReducer';
import countReducer from './reducers/countReducer';

export default function createStore(reducer) {
  let state;
 
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  function getState() {
    return state;
  };
 
  return {
    dispatch,
    getState
  };
}


function render() {
candyStore.getState();
countStore.getState();
}

let candyStore = createStore(candyReducer)

let countStore = createStore(countReducer)

candyStore.dispatch({ type: '@@INIT' });
countStore.dispatch({ type: '@@INIT' });