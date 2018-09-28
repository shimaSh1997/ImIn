import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";



const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

class Detail extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null, height: null, resizeMode: 'stretch' }}
        source={{ uri: 'jungle' }}
        blurRadius={5}>


        <View style={{
          flexDirection: 'column', marginVertical: 20
          , width: "100%", justifyContent: "center",
          alignItems: "center", padding: 15,
        }}>
          <View style={{
            paddingVertical: 5,
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_HEIGHT * 0.19,
            backgroundColor: "rgba(0,0,0,0.3)"
          }}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Text style={{
                color: '#fff', fontFamily: 'Quicksand-Bold'
                , fontSize: 20
              }}> Session 1</Text>
              <Text style={{
                color: '#fff', fontFamily: 'Quicksand-Bold', marginLeft: 110
              }}>97/2/8</Text>
              <Text style={{
                color: '#fff', fontFamily: 'Quicksand-Bold', marginLeft: 10

              }}>19:30</Text>
            </View>
            <Text style={{
              color: '#fff', fontFamily: 'Quicksand-Bold', marginLeft: 20, marginTop: 25

            }}>More On React Native and UI Component</Text>


          </View>



        </View>



      </ImageBackground>


    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
