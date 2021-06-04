import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { ButtonStyle as styles } from './ButtonStyle';

export function Button({ onPress }) {
	return (
		<TouchableOpacity
			activeOpacity={.7}
			style={styles.button}
			onPress={onPress}
		>
			<Text styl={styles.buttonText}>Adicionar</Text>
		</TouchableOpacity>
	)
}