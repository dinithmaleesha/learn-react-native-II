import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy a coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
    { text: 'Learn React', key: '4' },
  ])
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItems item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
