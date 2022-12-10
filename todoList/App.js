import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskItems from './src/TaskItems'
import TaskInputField from './src/TaskInputField'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TaskItems />
      <TaskInputField />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  }
})