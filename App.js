import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItem';
import AddTodo from './components/addTodo';

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

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [{
        text: 'Understood', onPress: () => console.log('alert closed')
      }])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to do form */}
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
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
