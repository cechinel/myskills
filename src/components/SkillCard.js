import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { SkillCardStyle as styles } from './SkillCardStyle';

export function SkillCard({ skill }) {
	return (
		<TouchableOpacity style={styles.buttonSkill}>
			<Text style={styles.textSkill}>
				{skill}
			</Text>
		</TouchableOpacity>
	)
}
