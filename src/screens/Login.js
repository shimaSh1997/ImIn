import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Fumi } from 'react-native-textinput-effects';
import codepen from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/common/Button';
import Dialog from 'react-native-dialog'



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
                this.props.navigation.navigate("HomeActivity")
            )


        }


    }


    render() {
        return (
            <LinearGradient colors={['#3780b2', '#000000']}
                style={{
                    width: 450, height: 800, backgroundColor: 'transparent'
                    , position: 'absolute', overflow: 'hidden'
                }}
                locations={[0.4, 1.2]}
            >
                <ScrollView
                    // style={styles.container}
                    contentContainerStyle={styles.content}

                >
                    <View style={{ marginTop: 100 }}>
                        <View style={[styles.card2, { backgroundColor: 'transparent' }]}>

                            <Fumi
                                style={styles.container}
                                label={'code'}
                                labelStyle={{ color: '#37b80b2', marginLeft: 5,marginBottom:3 }}
                                iconClass={codepen}
                                iconName={'logo-codepen'}
                                iconColor={'#000080'}
                                iconSize={20}
                                placeholder="Enter code"
                                value={this.state.code}
                                onChangeText={this.onCodeChange.bind(this)}
                                maxLength={10}
                                inputStyle={styles.input}
                            />
                            <Text style={{left:180,top:10}}>
                                character left:{this.state.code.length}/10
                            </Text>


                        </View>


                    </View>
                    <View style={{
                        width: 280, marginTop: 50, position: 'absolute', flex: 1, alignSelf: 'stretch'
                        , top: 190, left: 45
                    }}>

                        <Button
                            text="Register"
                            whenPressed={() => this.controler()}
                        />

                    </View>
                    <View style={{
                        width: 280, marginTop: 50, position: 'absolute', flex: 1, alignSelf: 'stretch'
                        , top: 290, left: 45
                    }}>
                        <Button
                            text="Details"
                            //fuck you js
                            whenPressed={() => this.showDialog()}

                        />
                        <View style={{elevation:3}}>
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


            </LinearGradient>

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
        position:'absolute'
    }
})

