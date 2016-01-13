'use strict';

import React, {Component, View, TouchableHighlight, TouchableOpacity, TextInput, Text} from 'react-native';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {actions, qsList} = this.props;
        return (
          <View style={{flexDirection:'column'}}>

            <Text onPress={actions.routes.message2()}>Push message2 view</Text>
            <Text onPress={()=>{this._onPress('asdasdas')}}>redux-----</Text>
            <Text onPress={actions.pop}>Go back!</Text>
          </View>
        );
    }

    _onPress(title) {
        this.props.setRouteName(title);
    }
}

module.exports = List;
