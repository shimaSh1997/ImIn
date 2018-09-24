import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import key from 'react-native-vector-icons/FontAwesome';
import Button from '../components/common/Button';
import Dialog from 'react-native-dialog';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

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

                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.content}
                    scrollEnabled={false}
                >
                    <View style={{ marginTop: SCREEN_HEIGHT * 0.1 }}>
                        <View style={[styles.card2, { backgroundColor: 'transparent' }]}>

                            <Fumi
                                style={styles.container}
                                label={'code'}
                                labelStyle={{ color: 'rgb(0,0,0.4)' }}
                                iconClass={key}
                                iconName={"key"}
                                iconColor={'#ddd'}
                                iconSize={20}

                                value={this.state.code}
                                onChangeText={this.onCodeChange.bind(this)}
                                maxLength={10}
                                inputStyle={styles.input}
                                keyboardType="numeric"
                            />
                            <Text style={{ left: SCREEN_WIDTH * 0.1, top: SCREEN_HEIGHT * 0.01, fontWeight: 'bold' }}>
                                Character Left:{this.state.code.length}/10
                            </Text>
                        </View>
                    </View>
                    <View style={{
                        marginTop: SCREEN_HEIGHT * 0.5, padding: 20,
                        marginLeft: 'auto', marginRight: 'auto',
                        width: "100%", height: 160,
                        flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                        <Button
                            text='Register'
                            whenPressed={() => this.controler()}
                        />
                        <Button
                            text='Details'
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



                </ScrollView>

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
