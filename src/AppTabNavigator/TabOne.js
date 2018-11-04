import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

class TabOne extends Component {


  static navigationOptions = {
    header: null
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
