import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Card from "../components/common/Card";
import CardSection from "../components/common/CardSection";
import CourseItem from "../components/CourseItem";

class TabThree extends Component {
  state = { name: "" };

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
