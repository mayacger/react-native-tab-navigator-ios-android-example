'use strict';

import React, {Component, View, TouchableHighlight, TouchableOpacity, TextInput, Text} from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos} = this.props;
        return (
            <View>
                {todos.map(todo=>
                    <View key={todo.id}>
                        <TouchableOpacity onPress={()=>{this._onPress(todo.id)}}>
                            <Text  style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}}>
                                {todo.text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
                </View>
        );
    }

    _onPress(index) {
        this.props.completeTodo(index);
    }
}

module.exports = List;
