'use strict';
import React, { Component, View, Text, } from 'react-native';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { connect } from 'react-redux/native';

import Header from '../components/header';
import MainSection from '../components/mainSection';
import Message2 from './message2';
import MessageComponent from '../components/messageComponent';


class App extends Component {
  constructor (props) {
    super(props);

  }
  _onPress(title) {
      this.props.setRouteName(title);
  }
  render () {
    const { dispatch, actions } = this.props;
    const cactions = bindActionCreators(Actions, dispatch);
    return (
      <MessageComponent {...this.props} actions={actions} {...cactions} />
    )
  }
}

export default connect(state => ({
}))(App);
