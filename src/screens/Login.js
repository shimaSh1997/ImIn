import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import codepen from 'react-native-vector-icons/Ionicons';
import Button from '../components/common/Button';
import Dialog from 'react-native-dialog';



class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = { code: "", dialogVisible: false }

    onCodeChange = (text) => {
        this.setState({ code: text })
    }


    showDialog = () => {
        this.setState({ dialogVisible: true });
    };
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };

    controler = () => {
        if (this.state.code.length == 10) {
            return (
                this.props.navigation.navigate("ProfileActivity")
            )


        }

    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                source={{ uri: 'beach' }} blurRadius={3}>

                <View style={{ marginTop: 80 }}>
                    <View style={[styles.card2, { backgroundColor: 'transparent' }]}>

                        <Fumi
                            style={styles.container}
                            label={'code'}
                            labelStyle={{ color: '#37b80b2', marginLeft: 5 }}
                            iconClass={codepen}
                            iconName={"logo-codepen"}
                            iconColor={'#000080'}
                            iconSize={20}

                            value={this.state.code}
                            onChangeText={this.onCodeChange.bind(this)}
                            maxLength={10}
                            inputStyle={styles.input}
                        />
                        <Text style={{ left: 25, top: 10, fontWeight: 'bold' }}>
                            Character Left:{this.state.code.length}/10
                            </Text>


                    </View>


                </View>
                <View style={{
                    width: 280, marginTop: 210, position: 'absolute', flex: 1, alignSelf: 'stretch'
                    , top: 190, left: 45
                }}>

                    <Button
                        text="Register"
                        whenPressed={() => this.controler()}
                    />

                </View>
                <View style={{
                    width: 280, marginTop: 180, position: 'absolute', flex: 1, alignSelf: 'stretch'
                    , top: 290, left: 45
                }}>
                    <Button
                        text="Details"
                        //fuck you js
                        whenPressed={() => this.showDialog()}

                    />
                    <View style={{ elevation: 3 }}>
                        <Dialog.Container visible={this.state.dialogVisible}>
                            <Dialog.Title> Start </Dialog.Title>
                            <Dialog.Description>
                                Enter ten character
                                </Dialog.Description>
                            <Dialog.Button label="close" onPress={this.handleCancel} />
                        </Dialog.Container>
                    </View>
                </View>
            </ImageBackground>

        )
    }
}

export default Login;

const styles = StyleSheet.create({


    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: 'transparent',
        borderRadius: 12,
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,

    },
    input: {
        marginTop: 4,
    },
    card1: {
        paddingVertical: 16,
    },
    card2: {
        padding: 16,
        borderRadius: 12,
        marginLeft: 5,
        marginRight: 5,
        position: 'absolute'
    }
})

