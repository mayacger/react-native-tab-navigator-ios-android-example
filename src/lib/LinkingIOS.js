'use strict';
import LinkingIOS from 'LinkingIOS'
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
//
// var React = require('react-native');
// import LinkingIOS from 'LinkingIOS';
// // var redux = require('redux');
// // var reactRedux = require('react-redux');
// var qs = require('./node_modules/qs/lib/index.js');
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Component,
// } = React;
//
// class dazhili extends Component {
//
//   constructor (props, context) {
//     super(props, context);
//     this._processURL = this._processURL.bind(this);
//     // this.isOpenUrl = this._processURL.bind(this) ? true : false;
//   }
//   // static defaultProps = {
//   // }
//   // static propTypes = {
//   // }
//
//   state = {
//     isOpenUrl: false
//   }
//
//   componentDidMount () {
//     LinkingIOS.addEventListener('url', this._processURL);
//   }
//
//   componentWillUnmount () {
//     LinkingIOS.removeEventListener('url', this._processURL);
//   }
//
//   _processURL (e) {
//     var url = e.url.replace('dazhili://','').split('?');
//
//     var path = url[0];
//
//     var params = url[1] ? qs.parse(url[1]) : null;
//
//     console.log(path, params);
//
//     this.setState({
//       isOpenUrl: true,
//     })
//   }
//
//   render() {
//     console.log(this.state.isOpenUrl)
//     return (
//       <View>
//         <Text>URL</Text>
//         <Text>{this.state.isOpenUrl}</Text>
//       </View>
//     )
//
//   }
// }
//
