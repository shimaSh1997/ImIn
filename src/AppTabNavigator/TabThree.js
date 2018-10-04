import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image } from "react-native";
import CourseItem from "../components/CourseItem";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import FabButton from '../components/common/FabButton';
import CourseFilterModal from '../components/CourseFilterModal';



class TabThree extends Component {
  state = { name: "", modalVisible: false };

  static navigationOptions = {
    header: null
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 10 }}>
          <FabButton whenPressed={() => this.setModalVisible(true)}
            png="filter"
          />

        </View>

        <Modal isVisible={this.state.modalVisible} onBackButtonPress={() => this.setModalVisible(false)}
          onBackdropPress={() => this.setModalVisible(false)}
          animationIn='slideInUp'
        >

          <CourseFilterModal onCancelPress={() => this.setModalVisible(false)} />
        </Modal>

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
