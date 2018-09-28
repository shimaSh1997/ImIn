import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import CourseItem from "../components/CourseItem";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalExample from "../components/ModalExample";


class TabThree extends Component {
  state = { name: "" };

  static navigationOptions = {
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
        <CourseItem stack={this.props.stackNavigation} />
        <ModalExample />





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
