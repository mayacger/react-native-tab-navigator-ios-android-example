'use strict';
import React, { Component, View, Text, } from 'react-native';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { connect } from 'react-redux/native';

import Header from '../components/header';
import MainSection from '../components/mainSection';

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { todos, dispatch, qsList } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <View style={{flexDirection:'column'}}>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} {...actions} />
      </View>
    )
  }
}

export default connect(state => ({
  todos: state.todos
}))(App);
