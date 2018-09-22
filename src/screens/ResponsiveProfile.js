import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Picker } from "react-native";
import { Isao } from 'react-native-textinput-effects';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const PADDINGH = SCREEN_WIDTH * 0.129

class ResponsiveProfile extends Component {
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
            <ImageBackground
                style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
                source={{ uri: 'backtest' }}
                blurRadius={2}>

                <View style={{
                    flex: 1,
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'transparent',
                    padding: 20
                }}>
                    <View style={{
                        width: SCREEN_WIDTH * 0.8,
                        height: "100%",
                        backgroundColor: "transparent",
                        paddingVertical: 45
                    }}>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            <Isao
                                label={'First Name'}
                                labelStyle={{ fontStyle: 'italic' }}
                                activeColor={'#FFFFFF'}
                                passiveColor={'#FFFFFF'}
                                style={{ marginTop: 4 }}
                            />
                            <Isao
                                style={{ marginTop: 4 }}
                                labelStyle={{ fontStyle: 'italic' }}
                                label={'Last Name'}
                                activeColor={'#FFFFFF'}
                                passiveColor={'#FFFFFF'}
                            />
                            <Isao
                                style={{ marginTop: 4 }}
                                labelStyle={{ fontStyle: 'italic' }}
                                label={'Email'}
                                activeColor={'#FFFFFF'}
                                passiveColor={'#FFFFFF'}
                            />
                        </KeyboardAvoidingView>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-around',
                            backgroundColor: "transparent", width: "100%", height: 70, marginLeft: "auto",
                            marginRight: "auto",
                            marginVertical: 20
                        }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{color:'#FFF',fontStyle:'italic',fontWeight: 'bold'}}> Entry Year</Text>
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

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{color:'#FFF',fontStyle:'italic',fontWeight: 'bold'}}> Degree</Text>
                                <Picker
                                    selectedValue={this.state.entryYear}
                                    onValueChange={this.onEntryYearChange}

                                    mode="dropdown"
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Bachlor" value="Bachlor" />
                                    <Picker.Item label="Master" value="Master" />

                                </Picker>

                            </View>


                        </View>
                        <View style={{
                            backgroundColor: 'transparent', width: "100%", height: 70,
                            marginVertical: 2,marginLeft:"auto",
                            marginRight: "auto",
                        }}>
                            <View style={{ flexDirection: 'column',
                            justifyContent:'space-around',alignItems:'center' }}>
                                <Text style={{color:'#FFF',fontStyle:'italic',fontWeight: 'bold'}}> Major</Text>
                                <Picker
                                    selectedValue={this.state.entryYear}
                                    onValueChange={this.onEntryYearChange}

                                    mode="dropdown"
                                    style={{
                                        backgroundColor: 'transparent',
                                        paddingHorizontal:SCREEN_WIDTH * 0.199,
                                        paddingVertical: 20,
                                        color: '#FFFFFF'
                                    }}
                                >
                                    <Picker.Item label="ComputerEng" value="ComputerEng" />
                                    <Picker.Item label="ChemistryEng" value="ChemistryEng" />
                                    <Picker.Item label="OilEng" value="OilEng" />
                                    <Picker.Item label="IndusterialEng" value="IndusterialEng" />
                                </Picker>

                            </View>

                        </View>


                    </View>

                </View>
            </ImageBackground>
        )
    }
}
export default ResponsiveProfile;


const styles = StyleSheet.create({
    picker: {
        backgroundColor: 'transparent',
        paddingHorizontal: PADDINGH,
        paddingVertical: 20,
        color: '#FFFFFF'
    },

    pickerText: {
        color: '#FFFFFF',
    }

})