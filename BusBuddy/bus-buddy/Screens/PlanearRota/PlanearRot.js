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
      const {navigate} = this.props.navigation;
      return(
          <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
          <TouchableOpacity onPress = {() => {navigate('Home', {})}} style = {styles.backButton}>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style = {styles.backImage} source={require('./back.png')} />
                  <Text
                  accessibilityLabel = "Botão"
                  accessibilityHint = "Voltar"
                  style = {styles.backText}>BACK</Text>
               </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
               <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                     <Text style = {styles.buttonText}>De momento não está implementado</Text>
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

   backButton: {
       display: 'flex',
       height: '10%',
       justifyContent: 'center',
       alignSelf: 'flex-start',
       backgroundColor: 'white',
       width: '20%',
       position: 'relative',
       left: '3%',
     },
   backImage: {
       height: '100%',
       width: '20%',
   },
   image: {
       display: 'flex',
       height: 50,
       width: 50,
       justifyContent: 'center',
       alignItems: 'center',
   },

  });
