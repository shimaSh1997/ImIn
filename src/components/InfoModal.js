import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const imageWidth = SCREEN_WIDTH * 0.18;

export default class InfoModal extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginHorizontal: 10 }}>
					<SvgUri width="860" height="630" source={require('./svg/last.svg')} />

					<View style={styles.box}>
						<Text style={styles.titleStyle}>React Native Fundamental:</Text>
						<Text style={styles.details} lineBreakMode="tail">
							React Native Fundamentaljjjjjjjjjjjkkkk kkkkkuefehfejfpejfpeffjefjpegthijhjhihrhjeg89rg
							ijgruthtuht8ht8hg8th8eh9th9h8r9rhgrht
						</Text>
					</View>
				</View>

				<View style={styles.instructorView}>
					<Text style={styles.instructorText}>Instructor</Text>
					<View style={styles.courseStatusView}>
						<Text style={styles.courseStatusText}>Course Status: 400</Text>
					</View>
				</View>

				<View style={styles.instructorImage}>
					<Image
						source={{ uri: 'shima' }}
						style={{
							width: imageWidth,
							height: imageWidth,
							borderRadius: imageWidth / 2,
							marginTop: 3
						}}
					/>

					<View style={styles.instructorImageCaption}>
						<Text
							lineBreakMode="tail"
							style={{
								fontFamily: 'Quicksand-Bold',
								fontSize: 14,
								marginLeft: 6,
								marginRight: 5,
								padding: 5,
								marginTop: 5
							}}
						>
							frjirjgifjoepjfefjefjfjfdefioehfkjfejfiefjehfemfmc
						</Text>
					</View>
					<View style={styles.assistantView}>
						<Text
							style={{
								fontFamily: 'Quicksand-Bold',
								fontSize: 20,
								marginLeft: 10,
								marginTop: 3,
								color: 'rgba(224,224,224 ,1)'
							}}
						>
							Assistant
						</Text>
					</View>
					<View style={styles.assistantImage}>
						<Image
							source={{ uri: 'img' }}
							style={{
								width: imageWidth,
								height: imageWidth,
								borderRadius: imageWidth / 2,
								marginTop: 3
							}}
						/>
						<View
							style={styles.assistantImageCaption}
						>
							<Text
								lineBreakMode="tail"
								style={{
									fontFamily: 'Quicksand-Bold',
									fontSize: 14,
									marginLeft: 6,
									marginRight: 5,
									padding: 5,
									marginTop: 5
								}}
							>
								frjirjgifjoepjfefjefjfjfdefioehfkjfejfiefjehfemfmc
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: SCREEN_HEIGHT * 0.8,
		width: SCREEN_WIDTH * 0.9,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: 4,
		backgroundColor: 'rgba(0,131,143 ,1)',
		borderRadius: 3
	},

	box: {
		position: 'absolute',
		top: SCREEN_HEIGHT / 20,
		marginLeft: 'auto',
		marginRight: 'auto',
		flexDirection: 'column'
	},

	titleStyle: {
		fontFamily: 'Quicksand-Bold',
		fontSize: 15,
		fontWeight: 'bold',
		marginLeft: 8
	},
	details: {
		fontFamily: 'Quicksand-Bold',
		fontSize: 14,
		marginLeft: 12,
		marginRight: 5,
		marginTop: 5
	},
	instructorView: {
		flexDirection: 'row',
		height: '10%',
		width: '100%',
		position: 'absolute',
		top: SCREEN_HEIGHT * 0.31,
		left: 5
	},
	instructorText: {
		fontFamily: 'Quicksand-Bold',
		fontSize: 20,
		marginLeft: 10,
		marginTop: 10,
		color: 'rgba(224,224,224 ,1)'
	},
	courseStatusView: {
		borderColor: 'rgba(255,235,59 ,0.7)',
		borderWidth: 1,
		borderRadius: 5,
		justifyContent: 'center',
		marginLeft: 'auto',
		marginRight: 10
	},
	courseStatusText: {
		fontFamily: 'Quicksand-Bold',
		fontSize: 14,
		marginLeft: 5,
		marginRight: 5,
		color: 'rgba(224,224,224 ,1)'
	},
	instructorImage: {
		flexDirection: 'row',
		height: '20%',
		width: '100%',
		position: 'absolute',
		top: SCREEN_HEIGHT * 0.39,
		left: 5
	},
	instructorImageCaption: {
		backgroundColor: '#fff',
		width: '70%',
		height: '70%',
		marginLeft: 10,
		marginTop: 20,
		elevation: 8,
		borderRadius: 10
	},
	assistantView: {
		flexDirection: 'row',
		height: '40%',
		width: '100%',
		position: 'absolute',
		top: SCREEN_HEIGHT * 0.16,
		left: 3,
		justifyContent: 'flex-start'
	},
	assistantImage: {
		flexDirection: 'row',
		height: '100%',
		width: '100%',
		position: 'absolute',
		top: SCREEN_HEIGHT * 0.22,
		left: 2
	},
	assistantImageCaption: {
		backgroundColor: '#fff',
		width: '70%',
		height: '70%',
		marginLeft: 10,
		marginTop: 20,
		borderRadius: 10,
		elevation: 8
	}
});
