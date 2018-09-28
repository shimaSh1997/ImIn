import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


const FabButton = (props) => {
    return (
        <TouchableOpacity onPress={props.whenPressed} style={{ backgroundColor: '#FFFFFF',
        borderRadius: 10,width:50,height:50,borderRadius:30,position:'absolute',top:10,right:10,alignItems:'center'
        ,justifyContent:'center'}} >
            <Text style={{fontWeight:'400',color: '#000', fontSize: 18}} > {props.text} </Text>
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
        
        alignSelf:'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        
        borderColor: '#372b60',
        opacity: 10,
        shadowOpacity: 10


    }
}
export default FabButton;