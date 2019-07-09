import { combineReducers, Reducer} from 'redux';
import { ADD_COUNTER  } from './actions'

interface IActionReducer {
  type: string, 
  payload?: any
}
interface IStateMyReducer {
  num: number
}

const counter: Reducer< IStateMyReducer, IActionReducer> = ( 
  state = {
    num: 0,
  }, 
  action
) => {
  switch(action.type){
    case ADD_COUNTER: {
      const newState = {...state } 
      newState.num++
      return newState
    }
    default:
        return state
  }
} 

export default combineReducers({
  counter,
})