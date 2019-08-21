import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const TodoList = ({
    todos, toggleTodo
}) => (
    <View>
       {todos.map(todo => 
        <TouchableOpacity
        key={todo.id}
        onPress={()=>toggleTodo(todo.id)}>
        <Text style={{fontSize: 20,
        textDecorationLine: todo.complted ?
    'line-through': 'none'}}>{todo.text}</Text>
        </TouchableOpacity>)}
    </View>
);

export default TodoList;
