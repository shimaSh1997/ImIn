import React from 'react';
import { Text,TouchableOpacity } from  'react-native';


const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.whenPressed} style={styles.buttonStyle} >
            <Text style = {styles.textStyle} > {props.text} </Text>
        </TouchableOpacity>
    )


}

const styles = {

    textStyle:{
        alignSelf:'center',
        color:'#0000000',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },

    buttonStyle:{
        width:280,
        alignSelf:'stretch',
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#372b60',
       
        
    }
}

export default Button;