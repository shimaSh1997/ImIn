import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import CourseItem from "../components/CourseItem";
import Ionicons from 'react-native-vector-icons/Ionicons';

class TabThree extends Component {
  state = { name: "" };
  
  static navigationOptions = {
    
    
    tabBarIcon: ({ focused, tintColor }) => {
      iconName = `ios-school${focused ? '' : '-outline'}`;
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    header: null
  }
  

  // onNameChange(text) {
  //   this.setState({ name: text });
  // }

  // onButtonPress = () => {
  //   this.props.stackNavigation.navigate("DetailActivity", { data: this.state.name });
  // };

  render() {
    // console.log(this.props.stackNavigation);

    return (
      <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
        source={{ uri: 'sea' }}
        blurRadius={10}>
        <CourseItem />

      </ImageBackground>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default TabThree;
