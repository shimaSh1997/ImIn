import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../components/common/Card";
import CardSection from "../components/common/CardSection";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

class TabThree extends Component {
  state = { name: "" };

  onNameChange(text) {
    this.setState({ name: text });
  }

  onButtonPress = () => {
    this.props.stackNavigation.navigate("DetailActivity",{data:this.state.name});
  };

  render() {
    console.log(this.props.stackNavigation);

    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            placeholder="Enter your name"
            value={this.state.name}
            onChangeText={this.onNameChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button
              whenPressed={this.onButtonPress.bind(this)}>
              
          </Button>
        </CardSection>
      </Card>
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
