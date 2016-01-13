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

export default class SearchIcon extends Component{

  constructor (props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch () {
    this.props.goToSearch();
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToSearch}>
        <Image source={require('../../images/search_icon.png')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
};
