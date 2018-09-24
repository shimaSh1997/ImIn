import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Isao } from 'react-native-textinput-effects';
import Button from '../components/common/Button';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const PADDINGH = SCREEN_WIDTH * 0.129

class ReplaceComponent extends Component {
    static navigationOptions = {
        header:null
    };
    controler = () => {
        return (
            // this.props.navigation.navigate("HomeActivity")
            this.props.navigation.push("HomeActivity")
        )


    }
    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
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
                        height: SCREEN_HEIGHT * 0.3,
                        backgroundColor: "transparent",
                        paddingVertical: 20
                    }}>
                        <KeyboardAvoidingView behavior="padding" enabled>
                            <Isao
                                label={'Email'}
                                labelStyle={{ fontStyle: 'italic' }}
                                activeColor={'#FFFFFF'}
                                passiveColor={'#FFFFFF'}
                                style={{ marginTop: 4 }}
                            />
                            <Isao
                                style={{ marginTop: 4 }}
                                labelStyle={{ fontStyle: 'italic' }}
                                label={'PassWord'}
                                activeColor={'#FFFFFF'}
                                passiveColor={'#FFFFFF'}
                            />

                        </KeyboardAvoidingView>
                    </View>
                    
                </View>
                <View style={{
                        width: "90%", marginVertical: -100, marginBottom: SCREEN_HEIGHT*0.29,marginLeft:'auto',
                        marginRight:'auto'

                    }}>
                        <Button
                            text='Register'
                            whenPressed={() => this.controler()}

                        />
                    </View>


            </ImageBackground>
        )
    }
}

export default ReplaceComponent;