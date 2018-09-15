import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Detail from './src/screens/Detail';


class App extends Component{
  render(){
    return(
      <AppStackNavigator/>

    )
  }
}

const AppStackNavigator = StackNavigator({
  LoginActivity:{
    screen:Login
  },
 
  HomeActivity:{
    screen:Home
  },

  DetailActivity:{
    screen:Detail
  },

  headerMode: 'none',
  initialRouteName: 'LoginActivity'  

})

export default App;