'use strict';

import React, {
  StyleSheet,
  TouchableHighlight,
  Image,
  Component,
} from 'react-native';
import Message2 from '../../containers/message2';

var styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 18,
    marginTop: 5,
    marginLeft: 8
  }
});

export default class AddPeopleIcon extends Component{
  constructor (props) {
    super(props);
    this.goToAddPage = this.goToAddPage.bind(this);
  }
  goToAddPage () {
    this.props.toRoute({
      name: "Find people",
      component: Message2
    });
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToAddPage}>
        <Image source={require('../../images/add_people_icon.png')} style={styles.icon} />
      </TouchableHighlight>
    )
  }
};
