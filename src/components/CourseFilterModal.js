import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
// import { CheckBox } from 'react-native-elements';
import ModalButton from '../components/common/ModalButton';
import CheckBox from 'react-native-check-box';



export default class CourseFilterModal extends Component {
    state = {
        computer_checked: false
    };
    ModalClosed = () => {
        this.setState({
            computer_checked: false,
            Industerial_checked: false, petrolium_checked: false,
            chemical_checked: false, year_94: false, year_95: false, year_96: false, year_97: false,
            up_comming: false, started: false, finished: false
        })

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.background}>
                    <Text style={styles.textMajor}>Major</Text>
                    <CheckBox
                        style={styles.computerChekBox}
                        isChecked={this.state.computer_checked}
                        rightText={"Computer Engineering"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                computer_checked: !this.state.computer_checked
                            })
                        }}

                    />
                    <CheckBox
                        style={styles.industerialChekBox}
                        isChecked={this.state.Industerial_checked}
                        rightText={"Industerial Engineering"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                Industerial_checked: !this.state.Industerial_checked
                            })
                        }}

                    />
                    <CheckBox
                        style={styles.PetroliumChekBox}
                        isChecked={this.state.PetroliumChekBox}
                        rightText={"Petrolium Engineering"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                PetroliumChekBox: !this.state.PetroliumChekBox
                            })
                        }}

                    />
                    <CheckBox
                        style={styles.chemicalChekBox}
                        isChecked={this.state.chemicalChekBox}
                        rightText={"chemical Engineering"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                chemicalChekBox: !this.state.chemicalChekBox
                            })
                        }}

                    />
                    <View style={{
                        width: 230, height: 2, backgroundColor: '#000'
                        , marginTop: 20, marginLeft: 'auto', marginRight: 'auto'
                    }}>

                    </View>
                    <Text style={styles.year}>Entry Year</Text>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-around'
                        , marginLeft: 'auto', marginRight: 'auto'
                    }}>
                        <ScrollView scrollEnabled={true} horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <CheckBox
                                style={styles.oneChek}
                                isChecked={this.state.year_94}
                                rightText={"94"}
                                rightTextStyle={{ fontWeight: '800', color: '#000' }}
                                onClick={() => {
                                    this.setState({
                                        year_94: !this.state.year_94
                                    })
                                }}

                            />
                            <CheckBox
                                style={styles.twoChek}
                                isChecked={this.state.year_95}
                                rightText={"95"}
                                rightTextStyle={{ fontWeight: '800', color: '#000' }}
                                onClick={() => {
                                    this.setState({
                                        year_95: !this.state.year_95
                                    })
                                }}

                            />
                            <CheckBox
                                style={styles.threeChek}
                                isChecked={this.state.year_96}
                                rightText={"96"}
                                rightTextStyle={{ fontWeight: '800', color: '#000' }}
                                onClick={() => {
                                    this.setState({
                                        year_96: !this.state.year_96
                                    })
                                }}

                            />

                            <CheckBox
                                style={styles.fourChek}
                                isChecked={this.state.year_97}
                                rightText={"97"}
                                rightTextStyle={{ fontWeight: '800', color: '#000' }}
                                onClick={() => {
                                    this.setState({
                                        year_97: !this.state.year_97
                                    })
                                }}

                            />
                        </ScrollView>

                    </View>
                    <View style={{
                        width: 230, height: 2, backgroundColor: '#000'
                        , marginTop: 20, marginLeft: 'auto', marginRight: 'auto'
                    }}>

                    </View>
                    <Text style={styles.courseStatus}>Course Status</Text>
                    <CheckBox
                        style={styles.upCommingChek}
                        isChecked={this.state.up_comming}
                        rightText={"Up Comming"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                up_comming: !this.state.up_comming
                            })
                        }}

                    />
                    <CheckBox
                        style={styles.startedChek}
                        isChecked={this.state.started}
                        rightText={"Started"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                started: !this.state.started
                            })
                        }}

                    />
                    <CheckBox
                        style={styles.finishedChek}
                        isChecked={this.state.finished}
                        rightText={"Finished"}
                        rightTextStyle={{ fontWeight: '800', color: '#000' }}
                        onClick={() => {
                            this.setState({
                                finished: !this.state.finished
                            })
                        }}

                    />
                    <View style={{
                        flexDirection: 'row', backgroundColor: 'transparent',
                        justifyContent: 'flex-end', marginLeft: 'auto'
                        , marginRight: 20, marginTop: 10
                    }}>
                        <ModalButton
                            text="Apply">
                        </ModalButton>

                        <ModalButton
                            text="Cancel"
                            whenPressed={this.props.onCancelPress}>
                        </ModalButton>
                    </View>




                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 4
    },
    background: {
        width: '99%',
        height: "90%",
        borderRadius: 10,
        backgroundColor: '#ADD8E6'
    },
    majorText: {
        backgroundColor: '#FFF',
        width: "98%",
        height: "70%",
        borderRadius: 5
    },
    textMajor: {
        marginTop: 6, marginLeft: 20,
        fontSize: 16, color: '#000', fontFamily: 'Quicksand-Bold'

    },
    computerChekBox: {
        backgroundColor: 'transparent',
        width: 200, borderColor: 'transparent'
        , marginTop: 5, marginLeft: 25

    },

    industerialChekBox: {
        backgroundColor: 'transparent', width: 200,
        borderColor: 'transparent', marginTop: 10, marginLeft: 25
    },
    PetroliumChekBox: {
        backgroundColor: 'transparent',
        width: 200, borderColor: 'transparent',
        marginTop: 10, marginLeft: 25
    },
    chemicalChekBox: {
        backgroundColor: 'transparent', width: 200,
        borderColor: 'transparent', marginTop: 10, marginLeft: 25
    },
    year: {
        marginTop: 5, marginLeft: 20, fontSize: 16,
        color: '#000', fontFamily: 'Quicksand-Bold'
    },
    oneChek: {
        backgroundColor: 'transparent',
        width: 60, borderColor: 'transparent', marginTop: 5, marginLeft: 45
    },
    twoChek: {
        backgroundColor: 'transparent',
        width: 60, borderColor: 'transparent', marginTop: 2
    },
    threeChek: {
        backgroundColor: 'transparent',
        width: 60, borderColor: 'transparent', marginTop: 2

    },
    fourChek: {
        backgroundColor: 'transparent',
        width: 60, borderColor: 'transparent', marginTop: 2

    },
    fiveChek: {

        backgroundColor: 'transparent',
        width: 60, borderColor: 'transparent', marginTop: 2
    },
    courseStatus: {


        marginTop: 5, marginLeft: 20, fontSize: 16,
        color: '#000', fontFamily: 'Quicksand-Bold'


    },
    upCommingChek: {
        backgroundColor: 'transparent',
        width: 200, borderColor: 'transparent', marginTop: 2, marginLeft: 25
    },
    startedChek: {
        backgroundColor: 'transparent',
        width: 200, borderColor: 'transparent', marginTop: 2, marginLeft: 25
    },
    finishedChek: {
        backgroundColor: 'transparent',
        width: 200, borderColor: 'transparent', marginTop: 2, marginLeft: 25
    }
})