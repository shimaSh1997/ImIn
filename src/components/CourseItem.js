import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import CourseItemButton from '../components/common/CourseItemButton';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

class CourseItem extends Component {
    render() {
        const imageWidth = SCREEN_WIDTH * 0.18;
        const offset = 10; // must be greater than 0
        let accent = 'transparent';

        // RkTheme.setType('RkButton', 'accent', {
        //     container: {
        //         backgroundColor: accent
        //     },
        //     content: {
        //         color: 'white'
        //     }
        // })

        return (
            // root container
            <View
                style={{
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    paddingTop: imageWidth / 2
                }}
            >
                {/* balck Container */}
                <View
                    style={{
                        paddingVertical: 5,
                        width: SCREEN_WIDTH * 0.8,
                        backgroundColor: "rgba(0,0,0,0.4)"
                    }}
                >
                    <View
                        style={{
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginVertical: 10
                        }}
                    >
                        <Image
                            style={{
                                width: "100%",
                                height: 90,
                                borderRadius: 3
                            }}
                            source={require("../assets/images/rnbanner.jpg")}
                        />

                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 20,
                                marginVertical: 15,
                                fontWeight: "bold"
                            }}
                        >
                            Hands On React Native
            </Text>
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 15,
                                marginLeft: 5,
                                fontFamily: "Quicksand-Bold"
                            }}
                        >
                            The Focus of React Native is on developer efficiency across all
                            the platforms you care about-learn once ,write anywere.faceBook
                            uses react Native in multiple production apps and will continue
                            investing in react Native.
            </Text>
                    </View>

                    <Image
                        source={{ uri: "shima" }}
                        style={{
                            top: -imageWidth / 2 + offset,
                            right: -imageWidth / 2 + offset,
                            width: imageWidth,
                            height: imageWidth,
                            position: "absolute",
                            borderRadius: imageWidth / 2
                        }}
                    />
                    <View style={{
                        marginLeft: 190,
                        marginBottom: 9
                    }}>
                        <CourseItemButton
                            text="Details"
                            whenPressed={() => this.props.stack.navigate("DetailActivity")}>

                        </CourseItemButton>
                    </View>
                </View>

            </View>
        );
    }
}

export default CourseItem;
