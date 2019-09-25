import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import React from 'react';
import {Provider} from 'react-redux';
import LoginReducers from './App/reducers/LoginReducers'
import SignInScreen from './App/components/SignInScreen';
import reducers from './App/reducers'

export default class App extends React.Component {

  render(){
    const store  = createStore(reducers,{},applyMiddleware(ReduxThunk));
return(
  <Provider store={store}>
      <SignInScreen />
  </Provider>
)
  }
}