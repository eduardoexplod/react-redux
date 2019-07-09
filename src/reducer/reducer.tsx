
interface IAppState {
  counter: number
}

interface IAction {
  type: 'increment' | 'decrement'
}


export const AppState : IAppState = {
  counter: 0
}

export const AppReducer: ( state: IAppState, action: IAction) => IAppState = (
  state = AppState, 
  action
) => {
  switch(action.type){
    case 'increment': 
      state.counter++
      return {
        ...state,
        counter: state.counter
      } 

    case 'decrement': 
      state.counter--
      return {
        ...state,
        counter: state.counter
      } 
    default:
      return state;
  }

}
