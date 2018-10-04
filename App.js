import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Detail from './src/screens/Detail';
import ResponsiveProfile from './src/screens/ResponsiveProfile';
import ReplaceComponent from './src/screens/ReplaceComponent';


class App extends Component {
  render() {
    return (
      <AppStackNavigator />

    )
  }
}

const AppStackNavigator = StackNavigator({
  LoginActivity: {
    screen: Login
  },

  HomeActivity: {
    screen: Home
  },

  DetailActivity: {
    screen: Detail
  },
  ProfileActivity: {
    screen: ResponsiveProfile
  },
  ReplaceActivity: {
    screen: ReplaceComponent
  },


}, {

    headerMode: "none",
    initialRouteName: 'HomeActivity'
  })

export default App;