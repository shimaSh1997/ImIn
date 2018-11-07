import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

class ListItem extends Component {
	state = { expanded: false };

	toggle = () => {
		console.log('toggled');
		this.setState((prevState, newProps) => ({
			expanded: !prevState.expanded
		}));
	};

	render() {
		return (
			<View style={styles.container}>
				<View
					style={{
						flexDirection: 'row',
						padding: 10,
						marginTop: 10,
						backgroundColor: 'transparent',
						justifyContent:'space-between'
					}}
				>
					<Text
						style={{
							color: '#fff',
							fontFamily: 'Quicksand-Bold',
							fontSize: 22
						}}
					>
						{this.props.sessionNumber}
					</Text>
					<Text
						style={{
							color: '#fff',
							fontFamily: 'Quicksand-Bold',
							marginLeft: SCREEN_WIDTH * 0.2
						}}
					>
						{this.props.date}
					</Text>
					<Text
						style={{
							color: '#fff',
							fontFamily: 'Quicksand-Bold'
							
							
						}}
					>
						{this.props.time}
					</Text>
				</View>
				<Text
					style={{
						color: '#fff',
						fontFamily: 'Quicksand-Bold',
						marginTop: 4,
						marginLeft: 10
					}}
				>
					{this.props.title}
				</Text>
				{this.state.expanded && (
					<Text
						numberOfLines={3}
						lineBreakMode="tail"
						style={{
							color: '#fff',
							fontFamily: 'Quicksand-Bold',
							marginTop: 4,
							marginLeft: 10
						}}
					>
						{this.props.titleExpanded}
					</Text>
				)}

				<View
					style={{
						width: 20,
						height: 15,
						marginLeft: SCREEN_WIDTH * 0.8
					}}
				>
					{this.props.presence ? (
						<Image style={{ width: 20, height: 20 }} source={{ uri: 'checked' }} />
					) : (
						<Image style={{ width: 20, height: 20 }} source={{ uri: 'cross' }} />
					)}
				</View>

				<View
					style={{
						flexDirection: 'row',
						backgroundColor: 'transparent',
						width: '100%',
						height: 30,
						marginTop: 5,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<View
						style={{
							height: 1,
							width: '42%',
							backgroundColor: '#fff',
							marginTop: 5,
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					/>

					<TouchableOpacity onPress={this.toggle}>
						<Icon name={`ios-arrow-${this.state.expanded ? 'up' : 'down'}`} size={40} color="#fff" />
					</TouchableOpacity>

					<View
						style={{
							height: 1,
							width: '42%',
							backgroundColor: '#fff',
							marginTop: 5,
							marginLeft: 'auto',
							marginRight: 'auto'
						}}
					/>
				</View>
			</View>
		);
	}
}

export default ListItem;

const styles = StyleSheet.create({
	container: {
		width: SCREEN_WIDTH * 0.9,
		backgroundColor: 'transparent'
	}
});
