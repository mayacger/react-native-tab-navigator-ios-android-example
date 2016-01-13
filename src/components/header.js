'use strict';
import React, {Component, View, TouchableHighlight, TextInput, Text} from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{marginTop:100, paddingLeft:20, flexDirection: 'row'}}>
            <TextInput style={{
                  height: 30,
                  padding: 4,
                  marginRight: 5,
                  flex: 4,
                  fontSize: 18,
                  borderWidth: 1,
                  borderColor: '#48BBEC',
                  color: '#48BBEC',
                }}
                onChange={this._onChange.bind(this)}
                onSubmitEditing = {this._onPress.bind(this)}
                clearButtonMode ="while-editing"
                placeholder="New To do list?"
                ref="test"/>
            <TouchableHighlight style={{flex:1}} onPress={this._onPress.bind(this)}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>);
    }

    _onPress() {
        this.text && this.props.addTodo(this.text);
        this.refs.test.clear();
    }

    _onChange(e) {
        this.text = e.nativeEvent.text;
    }
}

module.exports = Header;
