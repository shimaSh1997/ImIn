import React, { Component } from "react";
import {  StyleSheet } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import TabOne from "../AppTabNavigator/TabOne";
import TabTwo from "../AppTabNavigator/TabTwo";
import TabThree from "../AppTabNavigator/TabThree";

class Home extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return AppTabNavigator(this.props.navigation);
  }
}

const AppTabNavigator = navigation => {
  const TabNav = createBottomTabNavigator({
    ProfileTab: {
      screen: TabOne
    },
    HomeTab: {
      screen: TabTwo
    },
    Courses: {
      screen: () => <TabThree stackNavigation={navigation} />
    }
  });
  return <TabNav />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Home;
