import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState}from 'react'
import { Icon } from 'react-native-elements'

const TaskInputField = () => {
    const [task, setTask] = useState( )
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput style={styles.inputField} value={task} onChange={(text) => setTask(text)}/>

            <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={styles.button}>
              <Icon name="keyboard-arrow-up" type='materialIcons' size={24} color="black" />
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default TaskInputField

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})