import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyClCKvBd9TgurW1IcXlzY-HA4N8BhGQtXg',
      authDomain: 'manager-99c5b.firebaseapp.com',
      databaseURL: 'https://manager-99c5b.firebaseio.com',
      projectId: 'manager-99c5b',
      storageBucket: '',
      messagingSenderId: '275574811486'
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


export default App;
