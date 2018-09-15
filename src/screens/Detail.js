import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Detail extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <text> detail </text>
               
            </View>

        )
    }
}

export default Detail;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})