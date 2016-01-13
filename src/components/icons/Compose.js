'use strict';

import React, {
  StyleSheet,
  TouchableHighlight,
  Image,
  Component,
} from 'react-native';

var styles = StyleSheet.create({
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  }
});

export default class  ComposeIcon extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor="transparent">
        <Image source={require('../../images/compose_icon.png')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
};
