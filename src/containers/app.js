'use strict';
import React, {Component,StyleSheet,Navigator,PropTypes,View,Text} from 'react-native';
import Home from './home.js';
import Message from './message.js';
import Message2 from './message2.js';
import LinkingIOS from 'LinkingIOS';
import qs from 'qs';




import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import {
  actions as routerActions,
  NavBar,
  Route,
  Router,
  Schema,
  TabBar,
  TabRoute
} from 'react-native-router-redux';
import AddPeople from '../components/icons/AddPeople';
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

class RightButton extends Component {
  render () {
    return (
      <Text>s</Text>
    );
  }
}


const assets = {
  'calendar': require('../images/add_people_icon.png'),
  'home': require('../images/back_button.png'),
  'logo': require('../images/back_button.png'),
  'profile': require('../images/compose_icon.png'),
  'video': require('../images/search_icon.png'),
};

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

  _renderComponent (routeState) {
    if (routeState) {
      switch (routeState.path) {
        case 'home':
          return Home;
          break;
        case 'message':
          return Message;
          break;
        default:
          return Home;
      }
    }else {
      return Home;
    }

  }

  render () {


    const defaultSchema = {
      navBar: NavBar,
      navLeft: <Text>《 </Text>,
      navLeftColor: '#FFFFFF',
      navRightTitle: <Text>搜索 </Text>,
      rightHandler:() => {
        this.props.actions.routes.message();
      },
      navRight: 'detail',
      navTint: '#224655',
      navTitleColor: '#FFFFFF',
      navTitleStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
      },
      statusStyle: 'light-content',
      tabBar: TabBar,
    };

    return (
      <Router {...this.props} assets={assets} initial="tab1">
          <Schema name="default" {...defaultSchema} />

          <Route name="signIn" component={Home} type="reset" hideNavBar={true} />
          <Route name="detail" component={Message} title="detail" hideNavBar={true}/>
          <Route name="message2" component={Message2} title="爱仕达萨达撒" />
          <Route name="message" component={Message} title="Message"  />
          <TabRoute name="tabBar" barTint='#FFFFFF' tint="#32DEAF">
            <Route name="tab1" component={Home} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} />
            <Route name="tab2" component={Message} title="Calendar" tabItem={{icon: assets['calendar'], title: 'Calendar'}} />
            <Route name="tab3" component={Home} title="Video" tabItem={{icon: assets['video'], title: 'Video'}} />
            <Route name="tab4" component={Message} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} />
          </TabRoute>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
