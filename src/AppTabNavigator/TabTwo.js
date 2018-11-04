import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import ModalButton from '../components/common/FabButton'


class TabTwo extends Component {
    static navigationOptions = {
        header: null
    }

    onButtonPress = () => {
        this.props.stackNavigation.navigate("EnrolledActivity")
    }

    render() {
        return (
            <View style={styles.container}>
                <ModalButton
                    text="goTo"
                    whenPressed={() => this.onButtonPress()}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default TabTwo;