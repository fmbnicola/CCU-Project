import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

export default class BusDirection extends React.Component {
  static navigationOptions={
    title: "ConfirmBus",
  };
    /*this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false},
        { id: 1, title: 'Cook dinner', done: false}
      ]
    }  }*/

//ACRESCENTAR MANDAR O STATE E VER COMO RECEBER PARAMETROS
    render() {
      const {navigate} = this.props.navigation;
      var {params} = this.props.navigation.state;
      return(
        //<View style={styles.botoes}>
          /*<Button title="Paragens Próximas" accessibilityLabel="texto cegos" color="black" onPress={() => Alert.alert('1')}/>
          <Button title="Introduzir Percurso" onPress={() => Alert.alert('2')}/>
          <Button title="Planear Rota" onPress={() => Alert.alert('3')}/>
          <Button title="Minha Localização" onPress={() => Alert.alert('4')}/>*/
          <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
            <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style = {styles.backButton}>
                 <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                   <Image style = {styles.backImage} source={require('./back.png')} />
                   <Text style = {styles.backText}>BACK</Text>
                 </View>
            </TouchableOpacity>
            <Text style = {styles.Text}>Escolha o sentido do autocarro </Text><Text>{params.busNumberConf}</Text>

            <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style={styles.destinos}>
                <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                      <Text style = {styles.buttonText}>Fetais</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress = {() => {{navigate('BusDir', {})}}}  //falta por paramentos para passarem para o proximo ecra
              style = {styles.button}
              accessibilityHint = "Confirmar numero do autocarro"
              >
                 <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style={styles.image} source={require('./check-mark.png')} />
                 </View>
              </TouchableOpacity>
          </View>
        //</View>
      );
    }
  }

  const styles = StyleSheet.create({
   button: {
        display: 'flex',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        top:200,
        left: 160,

      },
    backButton: {
         display: 'flex',
         height: 20,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'white',
         width: 70,
         position: 'relative',
         left: 15,
       },
     backImage: {
         height: 20,
         width: 20,
     },
    image: {
        display: 'flex',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
       fontSize: 28,
       width:350,
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'center',
       position: 'relative',
       top: 45,
   },
   backText: {
      fontSize: 16,
      width:100,
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
      position: 'relative',
      right: 3,


  },
   keyBoard: {
      fontSize: 20,
      width:350,
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
      position: 'relative',
      top: 60,
  },
  buttonText: {
     fontSize: 18,
     width:200,
     //textTransform: 'uppercase',
     color: 'grey',
     textAlign:'left',
 },
 destinos: {
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


  });
