import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const inputBar = (props) => {
    return (

        <View style = {styles.inputContainer}>
            <TextInput 
                style        = {styles.input} 
                //when text in bar changes, call the function to change state info
                onChangeText = {(text) => props.changeTextFunc(text)}
                value        = {props.todoInput}
            ></TextInput>
            <TouchableOpacity 
                style   = {styles.addButton} 
                onPress = {() => props.addNewTodo()}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

//create stylesheet (here we have an example of dif depending on the os)
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 3},
                shadowColor: '#171717',
                shadowOpacity: .1
            },
            android: {
                elevation: 4,
                backgroundColor: '#FFFFFF'
            },
          }),
    },
    input: {
        backgroundColor: '#fff',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#0055aa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700'
    }
});

export default inputBar;