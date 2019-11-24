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


    render() {
      const {navigate} = this.props.navigation;
      return(
        //<View style={styles.botoes}>
          /*<Button title="Paragens Próximas" accessibilityLabel="texto cegos" color="black" onPress={() => Alert.alert('1')}/>
          <Button title="Introduzir Percurso" onPress={() => Alert.alert('2')}/>
          <Button title="Planear Rota" onPress={() => Alert.alert('3')}/>
          <Button title="Minha Localização" onPress={() => Alert.alert('4')}/>*/
          //<View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
          <View style = {{flexDirection:'column', position:'relative', top:'15%'}}>
          <TouchableOpacity onPress = {() => {navigate('Paragens', {})}} style={styles.button}>
               <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                 <Image style={styles.image} source={require('./bus-stop.png')} />
                     <Text style = {styles.buttonText}>Paragens Perto de Si</Text>
               </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style={styles.button}>
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.image} source={require('./find.png')} />
                    <Text style = {styles.buttonText}>Introduzir Percurso</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('Rota', {})}} style={styles.button}>
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.image} source={require('./route.png')} />
                    <Text style = {styles.buttonText}>Planear Rota</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('Local', {})}} style={styles.button}>
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
        height: '22.5%',
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
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'left',
   },

   image:{
     width: '15%',
     height: '65%',
     margin: '10%',
     resizeMode: 'center',

  },

  });
