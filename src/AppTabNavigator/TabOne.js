import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabOne extends Component {


  static navigationOptions = {
    header: null,
    
    tabBarIcon: ({ focused, tintColor }) => {
      iconName = `ios-school${focused ? '' : '-outline'}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }



    render() {
      return (
        <ImageBackground
          style={{ flex: 1, width: null, height: null, resizeMode: "stretch" }}
          source={{ uri: "sea" }}
          blurRadius={10}
        >
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

  export default TabOne;
