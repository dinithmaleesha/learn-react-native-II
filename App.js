import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1' },
    { name: 'dinith', key: '2' },
    { name: 'maleesha', key: '3' },
    { name: 'mario', key: '4' },
    { name: 'yoshi', key: '5' },
    { name: 'john', key: '6' },
    { name: 'price', key: '7' },
    { name: 'doe', key: '8' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
