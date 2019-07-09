import React from 'react';
import  { Provider } from 'react-redux'
import Home from './views/home';
import FBStore from './redux/index'

const App: React.FunctionComponent = () =>{
  return (
      <Provider store={FBStore} >
        <Home />
      </Provider>
  )
}

export default App;