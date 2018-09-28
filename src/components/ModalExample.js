import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Modal, ImageBackground } from "react-native";
import Button from '../components/common/Button';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FabButton from '../components/common/FabButton';
import ModalButton from '../components/common/ModalButton';

class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    ModalClosed = () => {
        this.setState({
            modalVisible: false, computer_checked: false,
            Industerial_checked: false, petrolium_checked: false,
            chemical_checked: false, year_94: false, year_95: false, year_96: false, year_97: false,
            up_comming: false, started: false, finished: false

        })

    }

    render() {
        return (
            <View style={{ marginTop: 15 }}>
                <Modal
                    animationType="fade"
                    visible={this.state.modalVisible}
                    supportedOrientations='portrait'
                    transparent={true}

                    onRequestClose={() => {
                        this.ModalClosed();
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        padding: 4

                    }}>
                        <ImageBackground style={{ width: '99%', height: "90%", borderRadius: 10 }}
                            source={require("../assets/images/bbb.jpg")}
                            blurRadius={8}>
                            {/* <View style={{ backgroundColor: '#FFF', width: "98%", height: "70%", borderRadius: 5 }}> */}
                            <Text style={{
                                marginTop: 6, marginLeft: 20,
                                fontSize: 16, color: '#000', fontFamily: 'Quicksand-Bold'
                            }}>Major</Text>
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    width: 200, borderColor: 'transparent'
                                    , marginTop: 1, marginLeft: 25
                                }}
                                title='Computer Engineering'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checkedColor='#000'
                                checked={this.state.computer_checked}
                                onPress={() => this.setState({ computer_checked: !this.state.computer_checked })}
                            />
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent', width: 200,
                                    borderColor: 'transparent', marginTop: -20, marginLeft: 25
                                }}
                                title='Industerial Engineering'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.Industerial_checked}
                                onPress={() => this.setState({ Industerial_checked: !this.state.Industerial_checked })}
                            />
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    width: 200, borderColor: 'transparent',
                                    marginTop: -20, marginLeft: 25
                                }}
                                title='Petrolium Engineering'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.petrolium_checked}
                                onPress={() => this.setState({ petrolium_checked: !this.state.petrolium_checked })}
                            />
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent', width: 200,
                                    borderColor: 'transparent', marginTop: -20, marginLeft: 25
                                }}
                                title='Chemical Engineering'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.chemical_checked}
                                onPress={() => this.setState({ chemical_checked: !this.state.chemical_checked })}
                            />
                            <View style={{
                                flexDirection: 'row',
                                marginLeft: 'auto', marginRight: 'auto', marginTop: -20
                            }}>
                                <Text>_________________________________________</Text>

                            </View>
                            <Text style={{
                                marginTop: 5, marginLeft: 20, fontSize: 16,
                                color: '#000', fontFamily: 'Quicksand-Bold'
                            }}>Entry Year</Text>
                            <View style={{
                                flexDirection: 'row', justifyContent: 'space-around'
                                , marginLeft: 'auto', marginRight: 'auto'
                            }}>

                                <CheckBox
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        width: 60, borderColor: 'transparent', marginTop: 2
                                    }}
                                    title='94'
                                    checkedColor='#000'
                                    textStyle={{ fontWeight: '800', color: '#000' }}
                                    checked={this.state.year_94}
                                    onPress={() => this.setState({ year_94: !this.state.year_94 })}
                                />
                                <CheckBox
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        width: 60, borderColor: 'transparent', marginTop: 2
                                    }}
                                    title='95'
                                    checkedColor='#000'
                                    textStyle={{ fontWeight: '800', color: '#000' }}
                                    checked={this.state.year_95}
                                    onPress={() => this.setState({ year_95: !this.state.year_95 })}
                                />
                                <CheckBox
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        width: 60, borderColor: 'transparent', marginTop: 2
                                    }}
                                    title='96'
                                    textStyle={{ fontWeight: '800', color: '#000' }}
                                    checkedColor='#000'
                                    checked={this.state.year_96}
                                    onPress={() => this.setState({ year_96: !this.state.year_96 })}
                                />
                                <CheckBox
                                    containerStyle={{
                                        backgroundColor: 'transparent',
                                        width: 60, borderColor: 'transparent', marginTop: 2
                                    }}
                                    title='97'
                                    checkedColor='#000'
                                    textStyle={{ fontWeight: '800', color: '#000' }}
                                    checked={this.state.year_97}
                                    onPress={() => this.setState({ year_97: !this.state.year_97 })}
                                />


                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', marginTop: -10 }}>
                                <Text>_________________________________________</Text>

                            </View>
                            <Text style={{
                                marginTop: 5, marginLeft: 20,
                                fontSize: 16, color: '#000', fontFamily: 'Quicksand-Bold', marginLeft: 25
                            }}>Course Status</Text>
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    width: 200, borderColor: 'transparent', marginTop: -5, marginLeft: 25
                                }}
                                title='Up Comming'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.up_comming}
                                onPress={() => this.setState({ up_comming: !this.state.up_comming })}
                            />
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    width: 200, borderColor: 'transparent', marginTop: -10, marginLeft: 25
                                }}
                                title='Started'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.started}
                                onPress={() => this.setState({ started: !this.state.started })}
                            />
                            <CheckBox
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    width: 200, borderColor: 'transparent', marginTop: -10, marginLeft: 25
                                }}
                                title='Finished'
                                checkedColor='#000'
                                textStyle={{ fontWeight: '800', color: '#000' }}
                                checked={this.state.finished}
                                onPress={() => this.setState({ finished: !this.state.finished })}
                            />


                            <View style={{
                                flexDirection: 'row', backgroundColor: 'transparent',
                                justifyContent: 'flex-end', marginLeft: 'auto'
                                , marginRight: 20, marginTop: -20
                            }}>
                                <ModalButton
                                    text="Apply">
                                </ModalButton>

                                <ModalButton
                                    text="Cancel">
                                </ModalButton>
                            </View>
                        </ImageBackground>
                    </View>
                </Modal>

                <FabButton
                    text="+"
                    whenPressed={() => {
                        this.setModalVisible(true)
                    }}
                />

            </View>
        );
    }
}

export default ModalExample;
