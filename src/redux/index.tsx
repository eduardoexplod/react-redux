import { createStore } from 'redux';
import myReducer  from './reducer';

export interface IInitialState {
  counter: {
    num: 0,
  }
}

const initialState: IInitialState = {
  counter: {
    num: 0,
  }
}

const store = createStore( myReducer, initialState )

export default store;