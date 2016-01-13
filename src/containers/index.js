'use strict';
import React, {Component,StyleSheet,Navigator,PropTypes,View,Text,Image} from 'react-native';
import Home from './home.js';
import Message from './message.js';
import Message2 from './message2.js';
import LinkingIOS from 'LinkingIOS';
import qs from 'qs';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import  {Router, actions as routerActions} from 'react-native-tab-navigator-ios-android';
import AddPeople from '../components/icons/AddPeople';
import BackButton from '../components/BackButton';
import SearchAndCompose from '../components/icons/SearchAndCompose';
//


const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});


class App extends Component  {
  constructor(props, context) {
    super(props, context);
    this._processURL = this._processURL.bind(this);
    this.state = {
      isOpenByUrl: false,
      selectedTab: 'home',
    }

  }

  state = {
    isOpenByUrl: false,
  }
  configureScene (route) {
    return Navigator.SceneConfigs.FloatFromRight;
  }
  componentDidMount () {
    LinkingIOS.addEventListener('url', this._processURL);
  }
  componentWillUnmount () {
    LinkingIOS.removeEventListener('url', this._processURL);
    this.setState({
      isOpenByUrl: false
    });
  }

  _processURL (e) {
    var url = e.url.replace('dazhili://','').split('?');
    var path = url[0];
    var params = url[1] ? qs.parse(url[1]) : null;

    this.setState({
      isOpenByUrl: true,
      routeState: {
        path,
        params,
      }
    });
    return null;
  }



  render () {


    let firstRoute = {
      name: 'Home',
      component: Home,
      leftCorner: AddPeople
    };


    return (
      <Router
          {...this.props}
          firstRoute={firstRoute}
          headerStyle={styles.header}
          backButtonComponent={BackButton}
          rightCorner={SearchAndCompose}
          tabBarStyle={{backgroundColor: '#666'}}
          selectedStyle = {{color:'#f6ba29'}}
        >
        <Router.Tabitem
          renderIcon={() => <Image source={require('../images/add_people_icon.png')} style={styles.icon2}  />}
          renderSelectedIcon={() => <Image source={require('../images/add_people_icon.png')} style={styles.icon2}  />}
          selected={this.state.selectedTab === 'home'}
          onPress={() => this.setState({ selectedTab: 'home' })}
          title="home"
          titleStyle={{color: '#FFF'}}
          changeRoute={{
            name: 'home',
            component: Home,
            leftCorner: AddPeople
          }}
          />
          <Router.Tabitem
            renderIcon={() => <Image source={require('../images/compose_icon.png')} style={styles.icon}  />}
            renderSelectedIcon={() => <Image source={require('../images/compose_icon.png')} style={styles.icon}  />}
            selected={this.state.selectedTab === 'news'}
            onPress={() => this.setState({ selectedTab: 'news' })}
            title="news"
            titleStyle={{color: '#FFF'}}
            changeRoute={{
              name: 'news',
              component: Message2,
              leftCorner: AddPeople
            }}
            />

      </Router>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent:'center',
  },
  navigationBar: {
    height:49,
    flexDirection: 'row',
    backgroundColor:'#f40'
  },
  header: {
   backgroundColor: '#5cafec'
  },
  icon: {
    width: 21,
    height: 21,
  },
  icon2: {
    width: 25,
    height: 18,
  },
});
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
