import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';


const FabButton = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.whenPressed}>
            <View style={{
                borderRadius: 30,
                backgroundColor: '#FFFFFF',
                height: 60, width: 60, alignItems: 'center', justifyContent: 'center'
            }}>
                <Image style={{ width: 20, height: 20 }} source={{ uri: props.png }} />

            </View>

        </TouchableWithoutFeedback>




    )


}

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: "400"
    },

    buttonStyle: {

        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,

        borderColor: '#372b60',
        opacity: 10,
        shadowOpacity: 10


    }
}
export default FabButton;