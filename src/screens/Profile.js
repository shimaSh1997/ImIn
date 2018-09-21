import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Picker } from "react-native";
import { Isao } from 'react-native-textinput-effects';
import Button from '../components/common/Button';




class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  state = { name: "", lastName: "", entryYear: "1395", mager: "", mobile: "" }

  onNameChange = (text) => {
    this.setState({ name: text })

  }
  onLastChange = (text) => {
    this.setState({ lastName: text })
  }
  onEntryYearChange = (text) => {
    this.setState({ entryYear: text })
  }
  onMagerChange = (text) => {
    this.setState({ mager: text })
  }
  onMobileChange = (text) => {
    this.setState({ mobile: text })
  }
  onButtonPress = () => {
    this.props.navigation.navigate("HomeActivity");
  };

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
        source={{ uri: 'backtest' }}
        blurRadius={2}>

        <View style={[styles.card1, {
          backgroundColor: 'transparent',
          width: 280, marginLeft: 40, marginTop: 2
        }]}>
          <Isao
            label={'First Name'}
            labelStyle={{ fontStyle: 'italic' }}
            activeColor={'#FFFFFF'}
            passiveColor={'#FFFFFF'}
            style={styles.input}
          />
          <Isao
            style={styles.input}
            labelStyle={{ fontStyle: 'italic' }}
            label={'Last Name'}
            activeColor={'#FFFFFF'}
            passiveColor={'#FFFFFF'}
          />
          <Isao
            style={styles.input}
            labelStyle={{ fontStyle: 'italic' }}
            label={'Email'}
            activeColor={'#FFFFFF'}
            passiveColor={'#FFFFFF'}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
              <Text style={{
                color: "#FFFFFF", fontWeight: 'bold',
                marginTop: 40, marginLeft: 15, fontStyle: 'italic'
              }}>Entry Year</Text>
              <Picker
                selectedValue={this.state.entryYear}
                onValueChange={this.onEntryYearChange}

                mode="dropdown"
                style={styles.picker}
              >
                <Picker.Item label="1394" value="1394" />
                <Picker.Item label="1395" value="1395" />
                <Picker.Item label="1396" value="1396" />
                <Picker.Item label="1397" value="1397" />
              </Picker>

            </View>
            <View>
              <Text style={{
                color: "#FFFFFF", fontWeight: 'bold',
                marginTop: 40, marginLeft: 15, fontStyle: 'italic'
              }}>Mager</Text>
              <Picker
                selectedValue={this.state.mager}
                onValueChange={this.onMagerChange}

                mode="dropdown"
                style={styles.picker}
              >
                <Picker.Item label="computer Eng" value="" />
                <Picker.Item label="Industerial Eng" value="IE" />
                <Picker.Item label="Petolium Eng" value="PE" />
                <Picker.Item label="Chemical Eng" value="1397" />
              </Picker>




            </View>

          </View>


        </View>

        <View style={{ marginLeft: 40, marginTop: 30 }}>
          <Button
            text="Register"
            whenPressed={this.onButtonPress.bind(this)}
          />

        </View>
      </ImageBackground>






    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'transparent',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,

  },
  input: {
    marginTop: 4
  },
  card1: {
    paddingVertical: 16,
    marginTop: 55

  },
  card2: {
    padding: 16,
  },


  total: {
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 10
  },
  picker: {
    backgroundColor: 'transparent',
    paddingHorizontal: 50,
    paddingVertical: 20,
    margin: 1,
    marginLeft: 18,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 5,
    alignSelf: 'flex-start',
    color: '#FFFFFF'
  },

  pickerText: {
    color: '#FFFFFF',
  }
})
