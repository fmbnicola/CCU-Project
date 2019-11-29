import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import Percurso_inputBus from "./IntroduzirPercurso/Percurso_inputBus"
import Localizacao from "./MinhaLocalizacao/Localizacao"
import PlanearRot from "./PlanearRota/PlanearRot"

export default class HomeScreen extends React.Component {
  /*static navigationOptions = {
    title: 'Welcome',
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


    WhereAmI(){

      Alert.alert(
        'Minha Localização',
        'De momento encontra-se na Avenida Manuel da Maia nº 34 perto da Alameda D. Afonso Henriques e junto ao Instituto Superior Técnico.',
        [
          {text: 'Reproduzir novamente', onPress: () => {this.WhereAmI()}},
          {text: 'OK', onPress: () => {}},
        ],
        {cancelable: false},
    );
    }

    render() {
      const {navigate} = this.props.navigation;
      return(
          <View style = {{flexDirection:'column', justifyContente: 'flex-start', position:'relative', top:'10%'}}>
          <Text style = {styles.Title} accessibilityLabel = 'Bus Baddy Menu Principal'>BusBuddy</Text><Text importantForAccessibility='no-hide-descendants' style = {styles.Buddy}>Buddy</Text>
          <Text importantForAccessibility='no-hide-descendants'> {"\n"} </Text>
          <TouchableOpacity onPress = {() => {navigate('Paragens', {})}} style={styles.button} accessibilityLabel = "Botão" accessibilityHint = "Paragens Perto de Si">
               <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                 <Image style={styles.image} source={require('./bus-stop.png')} />
                     <Text style = {styles.buttonText}>Paragens Perto de Si</Text>
               </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style={styles.button} accessibilityLabel = "Botão" accessibilityHint = "Introduzir Percurso">
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.image} source={require('./find.png')} />
                    <Text style = {styles.buttonText}>Introduzir Percurso</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('Rota', {})}} style={styles.button} accessibilityLabel = "Botão" accessibilityHint = "Planear Rota">
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.image} source={require('./route.png')} />
                    <Text style = {styles.buttonText}>Planear Rota</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {this.WhereAmI()}} style={styles.button} accessibilityLabel = "Botão" accessibilityHint = "Minha Localização">
              <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Image style={styles.image} source={require('./local.png')} />
                    <Text style = {styles.buttonText}>Minha Localização</Text>
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
        height: '18%',
        //height: 120,
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
       fontSize: 22,
       width:'50%',
       //fontSize: 18,
       //width: 200,
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'left',
   },

   image:{
     /* width: '15%',
     height: '65%',
     margin: '10%',
     resizeMode: 'center', */
     marginRight: '10%',
     width: '10%',
     height: '135%',
  },

  Title : {
    fontSize: 55,
    width: '90%',
    color: '#ffc119',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    },

  Buddy : {
      fontSize: 55,
      width: '90%',
      color: '#003176',
      textAlign: 'center',
      alignSelf: 'center',
      position: 'relative',
      left: '12.5%',
      },
  });
