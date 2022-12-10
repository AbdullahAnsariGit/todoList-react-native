import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const TaskItems = (props) => {
  const {index, task} = props
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.taskContainer}>
      <Text  style={styles.task}>{task}</Text>
      <TouchableOpacity>
        <Icon style={styles.delete} name='delete' type='antdesign' color="#fff" size={18}/>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskItems

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
},
indexContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
},
index: {
    color: '#fff',
    fontSize: 20,
},
taskContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
},
task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
},
delete: {
    marginLeft: 10,
},
})