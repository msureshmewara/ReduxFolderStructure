import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodo from './containers/VisibleTodo';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [],
        visibilityFilter: 'SHOW_ALL_TODOS'
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <AddTodo/>
        <View>
        <VisibleTodo/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

