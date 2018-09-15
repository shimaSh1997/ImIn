import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Detail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const item = this.props.navigation.getParam('data')
    return (
      <View style={styles.container}>
        <Text> detail </Text>
        <Text>item: {JSON.stringify(item)}</Text>
      </View>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
