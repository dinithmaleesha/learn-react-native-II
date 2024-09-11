import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Dinith')
  const [age, setAge] = useState(22)


  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age: </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. 99'
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)}
      />
      <Text>Name: {name}, age: {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});