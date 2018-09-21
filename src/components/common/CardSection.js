import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {

    return (
        <View style={styles.containerStyle} >
            {props.children}
        </View>

    );
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderColor: '#ddd',
        borderRadius: 15,
        width: "90%",
        height: "30%"

    }

};


export default CardSection;