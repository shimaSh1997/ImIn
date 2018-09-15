import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';



class TabTwo extends Component{
    // static navigationOptions = {
    //     header: null
    // }

    render(){
        return(
            <View style={styles.container}>
                    <Text>
                        Tab Two
                    </Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
})

export default TabTwo;