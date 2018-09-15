import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Card from '../components/common/Card';
import CardSection from '../components/common/CardSection';
import Input from '../components/common/Input';


class TabThree extends Component{
    // static navigationOptions = {
    //     header: null
    // }
    state = {name:''}

    onNameChange(text){
        this.setState({name:text})
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChangeText={this.onNameChange.bind(this)}
                        
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