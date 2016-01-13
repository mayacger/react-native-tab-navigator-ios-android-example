'use strict';

import React, {
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Component,
} from 'react-native';

export default class BackButton extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Image source={require('../images/back_button.png')} style={styles.backButton}  />
    )
  }
}

var styles = StyleSheet.create({
  backButton: {
    width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10
  }
});
