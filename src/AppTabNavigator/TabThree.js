import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';


class TabThree extends Component{
    // static navigationOptions = {
    //     header: null
    // }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Enter your name"
                        onChangeText={this.onNameChange.bind(this)}
                        value={this.props.email}
                        />
                </CardSection>

            </Card>
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

export default TabThree;