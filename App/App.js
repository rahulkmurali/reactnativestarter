import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';
import store from './Reducers/index';

import CounterAction from './Actions/CounterAction';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
          <CounterAction />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
