import React from 'react';
import Login from './components/login';
import Home from './components/home';
import Details from './components/details';
import Confirm from './components/confirm';
import Splash from './components/splash'
import {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

const home = createStackNavigator({
  Home : {
    screen : Home,
    navigationOptions: {
      header: null,
    },
  },
  Confirm : {
    screen : Confirm,
    navigationOptions : {
      title : 'Order'
    }
  },
  Details : {
    screen : Details,
    navigationOptions : {
      title : "Details"
    }
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#87c3ed',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
})

const login = createSwitchNavigator({
  Login : {
    screen : Login
  },
  Home : {
    screen : home
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})

const load = createSwitchNavigator({
  Splash : {
    screen : Splash
  },
  Login : {
    screen : login,
  }
},
{
  defaultNavigationOptions : {
    header : null,
  }
})

const AppCont = createAppContainer(load);

function App(){
  return <AppCont />
}

export default App