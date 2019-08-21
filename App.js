/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from "react-redux";
class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
      <TodoApp/>
      </Provider>
    );
  }
};



export default App;
