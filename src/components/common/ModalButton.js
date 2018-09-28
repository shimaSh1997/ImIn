import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const ModalButton = (props) => {
    return (
        <TouchableOpacity onPress={props.whenPressed} style={{
            backgroundColor: 'transparent',
            borderRadius: 3, width: 70, height: 40, alignItems: 'center'
            , justifyContent: 'center', opacity: 10, margin: 5, borderColor: '#000', borderWidth: 1

        }} >
            <Text style={{ fontWeight: '300', color: '#000', fontSize: 16 }} > {props.text} </Text>
        </TouchableOpacity>
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
        borderRadius: 5,
        borderColor: '#372b60',
        opacity: 10,
        shadowOpacity: 10


    }
}
export default ModalButton;