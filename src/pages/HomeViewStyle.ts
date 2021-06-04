import { StyleSheet, Platform } from 'react-native';

export const HomeViewStyle = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 70,
		backgroundColor: '#121015'
	},
	title: {
		color: '#FFF',
		fontSize: 24,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1F1E25',
		color: '#FFF',
		fontSize: 18,
		padding: Platform === 'ios' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7
	},
});
