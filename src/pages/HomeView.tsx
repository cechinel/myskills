import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
import { HomeViewStyle as styles } from './HomeViewStyle';

export default function App() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Manolo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nova habilidade"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 40 }]}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item}/>
        )}
      />

    </View>
  )
}
