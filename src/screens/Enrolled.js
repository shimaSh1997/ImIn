import React from 'react';
import { View, Text, ImageBackground, Dimensions, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import ListItem from '../components/ListItem';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import InfoModal from '../components/InfoModal';
import Icon from 'react-native-vector-icons/Ionicons';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const imageWidth = SCREEN_WIDTH * 0.24;

class Enrolled extends React.Component {
	state = { percent: 0.5, color: 'red', modalVisible: false };

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

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
				color: 'red'
			};
		} else if (this.state.percent === 0.8) {
			return {
				percent: 0.8,
				color: 'green'
			};
		}
	}

	render() {
		//alert(JSON.stringify(SCREEN_WIDTH*0.9));

		const colorProgressBar = this.change().color;
		return (
			<ImageBackground
				style={{
					flex: 1,
					width: null,
					height: null,
					resizeMode: 'cover',
					flexDirection: 'column',
					padding: 20
				}}
				source={{ uri: 'moon' }}
				blurRadius={3}
			>
				<View
					style={{
						paddingVertical: imageWidth * 0.58,
						paddingTop: 10,
						width: SCREEN_WIDTH * 0.9,
						backgroundColor: 'rgba(0,0,0,0.4)'
					}}
				>
					<View
						style={{
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
							marginHorizontal:10
						}}
					>
						<Text
							style={{
								color: '#fff',
								fontSize: 22,
								justifyContent:'center',
								alignItems:'center',
								marginLeft:100
							}}
						>
							React Native
						</Text>
						<TouchableOpacity
							style={{ marginLeft:'auto'}}
							onPress={() => this.setModalVisible(true)}
						>
							{/* <Image style={{ width: 25, height: 25 }} source={{ uri: 'info' }} /> */}
							<Icon name={`information-circle`} size={25} color="#fff" />

						</TouchableOpacity>

						<Modal
							isVisible={this.state.modalVisible}
							onBackButtonPress={() => this.setModalVisible(false)}
							onBackdropPress={() => this.setModalVisible(false)}
							animationIn="slideInUp"
						>
							<InfoModal />
						</Modal>
					</View>

					<Image
						source={{ uri: 'shima' }}
						style={{
							top: imageWidth / 2,
							left: imageWidth + 40,
							width: imageWidth,
							height: imageWidth,
							position: 'absolute',
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
						width: '100%',
						zIndex: 1,
						marginTop: -SCREEN_HEIGHT * 0.02
					}}
				>
					<Image
						style={{
							position: 'absolute',
							width: '90%',
							height: 80,
							borderRadius: 3,
							left: 19
						}}
						source={require('../assets/images/rnbanner.jpg')}
					/>
				</View>
				<View
					style={{
						flex: 1,
						paddingVertical: 20,
						width: SCREEN_WIDTH * 0.9,
						backgroundColor: 'rgba(255,255,255,0.4)',
						marginTop: SCREEN_HEIGHT * 0.08
					}}
				>
					<FlatList scrollEnabled={true} data={this.props.courseSessions} renderItem={this.renderListItem} />
				</View>
			</ImageBackground>
		);
	}
}

const mapStateToProps = (state) => ({
	courseSessions: state.courseSessions
});

export default connect(mapStateToProps)(Enrolled);
