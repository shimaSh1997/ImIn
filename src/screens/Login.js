import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Login extends Component{
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeActivity')}>
                    <Text>
                       login
                    </Text>

                </TouchableOpacity>

            </View>

        )
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }