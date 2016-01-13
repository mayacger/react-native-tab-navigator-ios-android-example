'use strict';

import React, {
  StyleSheet,
  View,
  TextInput,
  Component,
} from 'react-native';


import SearchIcon from './Search';
import ComposeIcon from './Compose';

import Home from '../../containers/home';

export default class BackButton extends Component {

  constructor (props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }
  
  goToSearch () {
    this.props.toRoute({
      name: "Search",
      component: Home,
      rightCorner: ComposeIcon,
      titleComponent: SearchBar
    })
  }

  render() {
    return (
      <View style={styles.iconContainer}>
        <SearchIcon goToSearch={this.goToSearch} />
        <ComposeIcon />
      </View>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <TextInput style={styles.input} placeholder="Search Twitter" />
    )
  }
};

var styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 21,
    height: 21,
    marginTop: 4,
    marginRight: 15
  },
  input: {
    backgroundColor: '#3f88bf',
    width: 220,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
    borderRadius: 4
  }
});
