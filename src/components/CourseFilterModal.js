import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
// import { CheckBox } from 'react-native-elements';
import ModalButton from "../components/common/ModalButton";
import CheckBox from "react-native-check-box";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default class CourseFilterModal extends Component {
  state = {
    computer_checked: false
  };
  ModalClosed = () => {
    this.setState({
      computer_checked: false,
      Industerial_checked: false,
      petrolium_checked: false,
      chemical_checked: false,
      year_94: false,
      year_95: false,
      year_96: false,
      year_97: false,
      up_comming: false,
      started: false,
      finished: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <Text style={styles.textMajor}>Major</Text>
          <CheckBox
            style={styles.computerChekBox}
            isChecked={this.state.computer_checked}
            rightText={"Computer Engineering"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                computer_checked: !this.state.computer_checked
              });
            }}
          />
          <CheckBox
            style={styles.computerChekBox}
            isChecked={this.state.Industerial_checked}
            rightText={"Industerial Engineering"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                Industerial_checked: !this.state.Industerial_checked
              });
            }}
          />
          <CheckBox
            style={styles.computerChekBox}
            isChecked={this.state.PetroliumChekBox}
            rightText={"Petrolium Engineering"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                PetroliumChekBox: !this.state.PetroliumChekBox
              });
            }}
          />
          <CheckBox
            style={styles.computerChekBox}
            isChecked={this.state.chemicalChekBox}
            rightText={"chemical Engineering"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                chemicalChekBox: !this.state.chemicalChekBox
              });
            }}
          />
          <View
            style={{
              width: 230,
              height: 2,
              backgroundColor: "#000",
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <Text style={styles.year}>Entry Year</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <ScrollView
              scrollEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <CheckBox
                style={styles.oneChek}
                isChecked={this.state.year_94}
                rightText={"94"}
                rightTextStyle={{ fontWeight: "800", color: "#000" }}
                onClick={() => {
                  this.setState({
                    year_94: !this.state.year_94
                  });
                }}
              />
              <CheckBox
                style={styles.twoChek}
                isChecked={this.state.year_95}
                rightText={"95"}
                rightTextStyle={{ fontWeight: "800", color: "#000" }}
                onClick={() => {
                  this.setState({
                    year_95: !this.state.year_95
                  });
                }}
              />
              <CheckBox
                style={styles.twoChek}
                isChecked={this.state.year_96}
                rightText={"96"}
                rightTextStyle={{ fontWeight: "800", color: "#000" }}
                onClick={() => {
                  this.setState({
                    year_96: !this.state.year_96
                  });
                }}
              />

              <CheckBox
                style={styles.twoChek}
                isChecked={this.state.year_97}
                rightText={"97"}
                rightTextStyle={{ fontWeight: "800", color: "#000" }}
                onClick={() => {
                  this.setState({
                    year_97: !this.state.year_97
                  });
                }}
              />
              
            </ScrollView>
          </View>
          <View
            style={{
              width: 230,
              height: 2,
              backgroundColor: "#000",
              marginTop: 20,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          <Text style={styles.courseStatus}>Course Status</Text>
          <CheckBox
            style={styles.upCommingChek}
            isChecked={this.state.up_comming}
            rightText={"Up Comming"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                up_comming: !this.state.up_comming
              });
            }}
          />
          <CheckBox
            style={styles.upCommingChek}
            isChecked={this.state.started}
            rightText={"Started"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                started: !this.state.started
              });
            }}
          />
          <CheckBox
            style={styles.upCommingChek}
            isChecked={this.state.finished}
            rightText={"Finished"}
            rightTextStyle={{ fontWeight: "800", color: "#000" }}
            onClick={() => {
              this.setState({
                finished: !this.state.finished
              });
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "transparent",
            justifyContent: "space-around",
            marginLeft: "auto",
            marginRight: 20,
            marginTop: "auto",
            marginBottom:'auto'
          }}  
        >
          <ModalButton text="Apply" />

          <ModalButton text="Cancel" whenPressed={this.props.onCancelPress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT * 0.61,
    width: SCREEN_WIDTH * 0.9,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 4,
    backgroundColor: "#ADD8E6",
    borderRadius: 10,
  },
  background: {
    width: "100%",
    height: "85%",
    backgroundColor: "#ADD8E6"
  },
  majorText: {
    backgroundColor: "#FFF",
    width: "98%",
    height: "70%",
    borderRadius: 5
  },
  textMajor: {
    marginTop: 6,
    marginLeft: 20,
    fontSize: 16,
    color: "#000",
    fontFamily: "Quicksand-Bold"
  },
  computerChekBox: {
    backgroundColor: "transparent",
    width: 200,
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 25
  },
  year: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 16,
    color: "#000",
    fontFamily: "Quicksand-Bold"
  },
  oneChek: {
    backgroundColor: "transparent",
    width: 60,
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 45
  },
  twoChek: {
    backgroundColor: "transparent",
    width: 60,
    borderColor: "transparent",
    marginTop: 2
  },
  courseStatus: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 16,
    color: "#000",
    fontFamily: "Quicksand-Bold"
  },
  upCommingChek: {
    backgroundColor: "transparent",
    width: 200,
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 25
  }
});
