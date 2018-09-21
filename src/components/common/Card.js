import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}


const styles = {
    containerStyle: {
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: "90%",
        height: "75%"
    }
};

export default Card;