'use strict';
import React, { Component, View, Text, } from 'react-native';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { connect } from 'react-redux/native';
import  {actions as routerActions} from 'react-native-tab-navigator-ios-android';

import Home from './home.js';


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

class App extends Component {
  constructor (props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
    this.goToBack = this.goToBack.bind(this);
  }

  goToSearch () {
    this.props.actions.push({
      // from: this.props.routes.activeTab,
      name: '详细内容',
      popTo: {
        name: "详情",
        component: Home,
      },
      // tabBarName: 'home',
      // navigator: this.props.nav,
    });
    // this.props.toRoute({
    //   name: "详情",
    //   component: Home,
    //   // rightCorner: ComposeIcon,
    //   // titleComponent: SearchBar
    // })
  }

  goToBack() {
    this.props.actions.pop();

    // this.props.reset(this.props);
  }
  render () {
    const { todos, dispatch, qsList, actions } = this.props;
    return (
      <View style={{flexDirection:'column',flex: 1,justifyContent:'center',}}>
        <Text onPress={this.goToSearch}>详细内容</Text>
        <Text onPress={this.goToBack}>Go back</Text>
      </View>
    )
  }
}

export default connect(state => ({
  qsList: state.qsList,
}),mapDispatchToProps)(App);
