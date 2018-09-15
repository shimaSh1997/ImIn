import React from 'react';
import { TextInput, View, Text} from 'react-native';



const Input = ({ placeholder,label,value, onChangeText }) => {

    return(
        <View style={styles.containerStyle} >
            <Text style={styles.labelStyle}>  
                {label}
            </Text>
            <TextInput style ={styles.inputStyle}
                value = {value}
                placeholder = {placeholder}
                onChangeText = {onChangeText}
            />
 
        </View>
    )
}
const styles ={
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        flex:2
    },
   labelStyle:{
       flex:1,
       fontSize:18,
       paddingLeft:5

    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }

};

export default Input;