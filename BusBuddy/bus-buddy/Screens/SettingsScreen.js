import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image} from 'react-native';

export default class SettingScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
        <Text style = {styles.Text}>Definições</Text>
        <TouchableOpacity style={styles.button}>
          <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Image style={styles.image} source={require('./Settings/notification.png')} />
            <Text style = {styles.buttonText}>Notificações</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Image style={styles.image} source={require('./Settings/fontsize.png')} />
            <Text style = {styles.buttonText}>Ecrã</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Image style={styles.image} source={require('./Settings/audio.png')} />
            <Text style = {styles.buttonText}>Som</Text>
          </View>
        </TouchableOpacity>
      </View>
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
      height: 60,
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
 image:{
   position:'relative',
   right:30,
   width:25,
   height:25,
   margin:30,
 },
 Text: {
  fontSize: 28,
  width:350,
  color: 'grey',
  textAlign:'center',
  position: 'relative',
  top: -30,
},

});
