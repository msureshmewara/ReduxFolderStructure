import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';


class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
addTodo = (text) => {
this.props.dispatch({type: 'ADD_TODO', text})
this.setState({text: ''});
}
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Enter user"
                    style={{
                        borderWidth: 1, borderColor: '#f2f2e1',
                        backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5
                    }}
                />
                <TouchableOpacity
                    onPress={() => this.addTodo(this.state.text)}>
                    <Text> Add </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default connect()(AddTodo);