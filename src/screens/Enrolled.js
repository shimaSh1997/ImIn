import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
  FlatList
} from "react-native";
import ListItem from "../components/ListItem";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const imageWidth = SCREEN_WIDTH * 0.24;

class Enrolled extends React.Component {
  state = { percent: 0.5, color: "red" };

  renderListItem({ item, index }) {
    return (
      <ListItem
        sessionNumber={item.session}
        date={item.date}
        time={item.time}
        title={item.title}
        titleExpanded={item.titleExpanded}
        presence={item.presence}
      />
    );
  }

  change() {
    if (this.state.percent === 0.5) {
      return {
        percent: 0.5,
        color: "red"
      };
    } else if (this.state.percent === 0.8) {
      return {
        percent: 0.8,
        color: "green"
      };
    }
  }

  render() {
    // alert(JSON.stringify(this.props.courseSessions));

    const colorProgressBar = this.change().color;
    return (
      <ImageBackground
        style={{
          flex: 1, width: null, height: null, resizeMode: "cover", flexDirection: "column",
          padding: 20
        }}
        source={{ uri: "moon" }}
        blurRadius={3}
      >
        <View
          style={{
            paddingVertical: imageWidth / 2,
            paddingTop: 10,
            width: SCREEN_WIDTH * 0.9,
            backgroundColor: "rgba(0,0,0,0.4)"
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              marginLeft: SCREEN_WIDTH * 0.31
            }}
          >
            React Native
            </Text>

          <Image
            source={{ uri: "shima" }}
            style={{
              top: imageWidth / 2,
              left: imageWidth + 40,
              width: imageWidth,
              height: imageWidth,
              position: "absolute",
              borderRadius: imageWidth / 2
            }}
          />
          <Progress.Circle
            style={{ marginLeft: 20 }}
            progress={this.change().percent}
            size={75}
            indeterminate={false}
            borderWidth={4}
            borderColor="#ffffff00"
            thickness={6}
            strokeCap="round"
            color={colorProgressBar}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingVertical: 20,
            width: SCREEN_WIDTH * 0.9,
            backgroundColor: "rgba(255,255,255,0.4)",
            marginTop: 40
          }}
        >
          <FlatList
            scrollEnabled={true}
            data={this.props.courseSessions}
            renderItem={this.renderListItem}
          />
        </View>

        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 140,
            left: 20,
            marginVertical: 20
          }}
        >
          <Image
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              height: 80,
              borderRadius: 3
            }}
            source={require("../assets/images/rnbanner.jpg")}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  courseSessions: state.courseSessions
});

export default connect(mapStateToProps)(Enrolled);
