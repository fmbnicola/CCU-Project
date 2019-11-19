import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


export default class TodoItem extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        //get item from props
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity 
                style={styles.todoItem}
                onPress={ () => this.props.toggleDone()}
            >
                <Text style={(todoItem.done)? {color: '#AAAAAA' } : { color: '#313131'} }>
                    {todoItem.title}
                </Text>

                <Button 
                    title   = 'Remove'
                    color   = {(todoItem.done)? 'rgba(200, 0, 0, 0.2)' : 'rgba(255, 0, 0, 1)'}
                    disabled= {todoItem.done}
                    onPress = {() => this.props.removeTodo()}
                />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    todoItem: {
      width: '100%',
      height: 40,
      borderBottomColor: '#DDD',
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
    },
  });