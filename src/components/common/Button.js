import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.whenPressed} style={styles.buttonStyle} >
            <Text style={styles.textStyle} > {props.text} </Text>
        </TouchableOpacity>
    )


}

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#372b60',
        opacity: 10,
        shadowOpacity: 10


    }
}

export default Button;