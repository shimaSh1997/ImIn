import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './common/Card';
import { RkButton, RkTheme } from 'react-native-ui-kitten';



class CourseItem extends Component {


    render() {
        let accent = 'transparent';

        RkTheme.setType('RkButton', 'accent', {
            container: {
                backgroundColor: accent
            },
            content: {
                color: 'white'
            }
        })
        return (


            <View style={{ marginTop: 19, marginLeft: 20, alignContent: 'center' }} >
                <Card>
                    <View style={{
                        position: 'absolute', elevation: 2, flex: 1,
                        width: "100%", height: "90%", marginTop: 11, marginLeft: 15
                    }}>
                        <Image style={{ width: "90%", height: "30%", borderRadius: 5 }}
                            source={{ uri: 'react' }} />
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: -18,
                        marginLeft: 275

                    }}>
                        <Image style={{ width: 55, height: 55, borderRadius: 150 / 2, elevation: 5 }}
                            source={{ uri: 'shima' }} />

                    </View>
                    <Text style={{
                        flex: 2, marginTop: 110, marginLeft: 19,
                        color: "#FFFFFF", fontWeight: 'bold', fontSize: 16
                    }}>
                        Hands On React Native
                </Text>
                    <Text style={{ fontFamily: 'Quicksand-Bold', flex: 7, color: "#FFFFFF", marginLeft: 15 }}>
                        The Focus of React Native is on developer efficiency across all the platforms you care about-learn once
                        ,write anywere.faceBook uses react Native in multiple production apps and will continue investing in react Native.
                </Text>
                    <View style={{ marginLeft: 203, marginBottom: 9 }}>
                        <RkButton rkType='accent' style={{
                            height: 33,
                            width: 85, borderWidth: 1, borderColor: '#FFFFFF'
                        }}>
                            Details
                        </RkButton>
                    </View>
                </Card>
            </View>
        )
    }
}

export default CourseItem;

