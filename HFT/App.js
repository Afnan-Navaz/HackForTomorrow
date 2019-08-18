import React, {useEffect} from 'react';
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
      title : 'Request Pickup',
    }
  },
  Details : {
    screen : Details,
    navigationOptions : {
      title : "Pickup History"
    }
  }
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#1a5e8f',
      height : 80
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      flex : 1,
      
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

const AppCont = createAppContainer(login);

function App(){
  return <AppCont />
}

export default App