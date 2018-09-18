import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Isao } from 'react-native-textinput-effects';
import { Picker } from 'react-native-picker-dropdown';
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

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} source={{ uri: 'back' }}>
        <View style={[styles.card1, { backgroundColor: 'transparent' }]}>
          <Isao
            label={'First Name'}
            labelStyle={{ fontStyle: 'italic' }}
            activeColor={'#FFFFFF'}
            passiveColor={'#000000'}
            style={styles.input}
          />
          <Isao
            style={styles.input}
            labelStyle={{ fontStyle: 'italic' }}
            label={'Last Name'}
            activeColor={'#FFFFFF'}
            passiveColor={'#000000'}
          />
          <Isao
            style={styles.input}
            labelStyle={{ fontStyle: 'italic' }}
            label={'Email'}
            activeColor={'#FFFFFF'}
            passiveColor={'#000000'}
          />
          <Text style={{ color: "#000000", fontWeight: 'bold', marginTop: 40, marginLeft: 15, fontStyle: 'italic' }}>Entry Year</Text>
          <Picker
            selectedValue={this.state.entryYear}
            onValueChange={this.onEntryYearChange}
            prompt="Choose your Entry Year"
            mode="dropdown"
            style={styles.picker}
            textStyle={styles.pickerText}
            cancel
          >
            <Picker.Item label="1394" value="1394" />
            <Picker.Item label="1395" value="1395" />
            <Picker.Item label="1396" value="1396" />
            <Picker.Item label="1397" value="1397" />
          </Picker>
        </View>
      
        <View style={{marginLeft:30,marginTop:40}}>
        <Button
          text="Register"
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
    alignSelf: 'stretch',
    backgroundColor: 'transparent',


    marginLeft: 5,
    borderRadius: 10,
  },
  pickerText: {
    color: '#000000',
  }
})
