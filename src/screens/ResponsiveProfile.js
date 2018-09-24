import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Picker } from "react-native";
import { Isao } from 'react-native-textinput-effects';
import Button from '../components/common/Button';
import ReplaceComponent from "./ReplaceComponent";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const PADDINGH = SCREEN_WIDTH * 0.129

class ResponsiveProfile extends Component {
    static navigationOptions = {
        header: null
    };
    state = { name: "", lastName: "", entryYear: "", major: "", degree: "" }

    onNameChange = (text) => {
        this.setState({ name: text })

    }
    onLastChange = (text) => {
        this.setState({ lastName: text })
    }
    onEntryYearChange = (text) => {
        this.setState({ entryYear: text })
    }
    onMajorChange = (text) => {
        this.setState({ major: text })
    }
    onDegreeChange = (text) => {
        this.setState({ degree: text })
    }
    controler = () => {
        return (
            // this.props.navigation.navigate("HomeActivity")
            this.props.navigation.push("ReplaceActivity")
        )


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
                        height: SCREEN_HEIGHT * 0.7,
                        backgroundColor: "transparent",
                        paddingVertical: 20
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
                                label={'Mobile'}
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
                                <Text style={{ color: '#FFF', fontStyle: 'italic', fontWeight: 'bold' }}> Entry Year</Text>
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
                                <Text style={{ color: '#FFF', fontStyle: 'italic', fontWeight: 'bold' }}> Degree</Text>
                                <Picker
                                    selectedValue={this.state.degree}
                                    onValueChange={this.onDegreeChange}

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
                            marginVertical: 2, marginLeft: "auto",
                            marginRight: "auto"
                        }}>
                            <View style={{
                                justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                            }}>
                                <Text style={{ color: '#FFF', fontStyle: 'italic', fontWeight: 'bold' }}> Major</Text>
                                <Picker
                                    selectedValue={this.state.major}
                                    onValueChange={this.onMajorChange}

                                    mode="dropdown"
                                    style={{
                                        backgroundColor: 'transparent',
                                        paddingHorizontal: SCREEN_WIDTH * 0.29,
                                        paddingVertical: 20,
                                        color: '#FFFFFF',
                                        marginLeft: SCREEN_WIDTH * 0.2

                                    }}
                                >
                                    <Picker.Item label="ComputerEngineering" value="ComputerEngineering" />
                                    <Picker.Item label="ChemistryEngineering" value="ChemistryEngineering" />
                                    <Picker.Item label="OilEngineering" value="OilEngineering" />
                                    <Picker.Item label="IndusterialEngineering" value="IndusterialEngineering" />
                                </Picker>

                            </View>

                        </View>

                    </View>
                    <View style={{
                        width: "100%", marginVertical: 30, marginBottom: 'auto'

                    }}>
                        <Button
                            text='Continue'
                            whenPressed={() => this.controler()}
                        />
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