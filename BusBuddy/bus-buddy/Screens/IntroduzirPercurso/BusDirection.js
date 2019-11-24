import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput, ActivityIndicator} from 'react-native';

import {getRouteDirections} from '../API_components/APIFunctions'

export default class BusDirection extends React.Component {
  static navigationOptions={
    title: "BusDir",
  };

  constructor(props) {
      super(props);
      var {params} = this.props.navigation.state;
      this.state = {
          loading: true,
          directions: null,
          numBus:params.busNumber
      };
  }


  componentDidMount(){
      //var {params} = this.props.navigation.state;
      getRouteDirections(this, this.state.numBus);
  }


  render() {
    const {navigate} = this.props.navigation;


    if(this.state.loading){
        return(
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )
    }
    return(
        <View style = {{flexDirection:'column', alignItems:'center',justifyContent:'space-between', position:'relative', top:'15%'}}>
          <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style = {styles.backButton}>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style = {styles.backImage} source={require('./back.png')} />
                  <Text style = {styles.backText}>BACK</Text>
                </View>
          </TouchableOpacity>
          <Text style = {styles.Text}>Escolha o sentido do autocarro </Text><Text style = {styles.numBusText}>{this.state.numBus}</Text>

          <TouchableOpacity onPress = {() => {navigate('StopsList', {
                busNumber: this.state.numBus, 
                fin_stop: this.state.directions.initial_stop.id,
                ini_stop: this.state.directions.final_stop.id
              })}} 
              style={styles.direcao1}>
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style = {styles.destText}> {this.state.directions.initial_stop.name} </Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => {navigate('StopsList', {
                busNumber: this.state.numBus, 
                fin_stop: this.state.directions.final_stop.id,
                ini_stop: this.state.directions.initial_stop.id
              })}} 
              style={styles.direcao2}>
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text style = {styles.destText}> {this.state.directions.final_stop.name} </Text>
              </View>
          </TouchableOpacity>

        </View>
    );
  }
}

  const styles = StyleSheet.create({
    /*button: {
        display: 'flex',
        height: 50,
        width: 50,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
      },
    backButton: {
         display: 'flex',
         alignSelf: 'flex-start',
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
     }, */
     button: {
      display: 'flex',
      height: '20%',
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'relative',
      top: '30%',
      //position: 'relative',
      //top: '15%',
      //left: '25%',
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
    /*Text: {
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
  },*/
  Text: {
    fontSize: 25,
    width:'80%',
    //textTransform: 'uppercase',
    color: 'grey',
    textAlign:'center',
    //position: 'relative',
    //top: '0%',
    //left: '8%',
  },
  numBusText: {
    fontSize: 25,
    width:'40%', //small
    width: '80%', //same size as destination buttons
    //textTransform: 'uppercase',
    color: 'grey',
    textAlign:'center',
    borderRadius:10,
    borderBottomWidth: 0.5,
    borderBottomColor:'grey',
    borderTopWidth: 0.5,
    borderTopColor:'grey',
    borderLeftWidth: 0.5,
    borderLeftColor:'grey',
    borderRightWidth: 0.5,
    borderRightColor:'grey',
  },
  backText: {
    fontSize: 16,
    width:'50%',
    //textTransform: 'uppercase',
    color: 'grey',
    textAlign:'center',      
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
  destText: {
     fontSize: 20,
     //width:'100%',
     //textTransform: 'uppercase',
     //color: '#5A6978',
     color:'white',
     textAlign:'center',
 },
 direcao1: {
     display: 'flex',
     //margin: '30%',
     height: '20%',
     width: '80%',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     //top: '30%',

     borderRadius:20,
     borderBottomWidth: 0.5,
     borderBottomColor:'grey',
     borderTopWidth: 0.5,
     borderTopColor:'grey',
     borderLeftWidth: 0.5,
     borderLeftColor:'grey',
     borderRightWidth: 0.5,
     borderRightColor:'grey',
     backgroundColor: '#47525E',
     //shadowColor: '#47525E',
     shadowColor: 'white',
     shadowOpacity: 0.4,
     shadowOffset: { height: 10, width: 0 },
     shadowRadius: 20,
 },
 direcao2: {
     /*display: 'flex',
     height: 70,
     width:190,
     margin:30,
     justifyContent: 'center',
     alignItems: 'center',

     borderRadius:20,
     borderBottomWidth: 0.5,
     borderBottomColor:'grey',
     borderTopWidth: 0.5,
     borderTopColor:'grey',
     borderLeftWidth: 0.5,
     borderLeftColor:'grey',
     borderRightWidth: 0.5,
     borderRightColor:'grey',
     backgroundColor: '#0066cc',
     shadowColor: '#2AC062',
     shadowOpacity: 0.4,
     shadowOffset: { height: 10, width: 0 },
     shadowRadius: 20,*/

     display: 'flex',
     //margin: '30%',
     height: '20%',
     width: '80%',
     justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'center',
     //top: '30%',

     borderRadius:20,
     borderBottomWidth: 0.5,
     borderBottomColor:'grey',
     borderTopWidth: 0.5,
     borderTopColor:'grey',
     borderLeftWidth: 0.5,
     borderLeftColor:'grey',
     borderRightWidth: 0.5,
     borderRightColor:'grey',
     backgroundColor: '#47525E',
     //shadowColor: '#47525E',
     shadowColor: 'white',
     shadowOpacity: 0.4,
     shadowOffset: { height: 10, width: 0 },
     shadowRadius: 20,
 },
 loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }


  });
