import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

export default class PlanearRot extends React.Component {
  static navigationOptions={
    title: "InputBus",
  };
  /*constructor(){
    super();



    /*this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false},
        { id: 1, title: 'Cook dinner', done: false}
      ]
    }  }*/


    render() {
      return(
        //<View style={styles.botoes}>
          /*<Button title="Paragens Próximas" accessibilityLabel="texto cegos" color="black" onPress={() => Alert.alert('1')}/>
          <Button title="Introduzir Percurso" onPress={() => Alert.alert('2')}/>
          <Button title="Planear Rota" onPress={() => Alert.alert('3')}/>
          <Button title="Minha Localização" onPress={() => Alert.alert('4')}/>*/
          <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
          <TouchableOpacity onPress = {() => {Alert.alert('4')}} style={styles.button}>
               <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                     <Text style = {styles.buttonText}>Planear Rota</Text>
               </View>
          </TouchableOpacity>
          </View>
        //</View>
      );
    }
  }

  const styles = StyleSheet.create({
    botoes: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        display: 'flex',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        backgroundColor: '#f2f2f2',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    buttonText: {
       fontSize: 18,
       width:200,
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'left',
   },

  });
