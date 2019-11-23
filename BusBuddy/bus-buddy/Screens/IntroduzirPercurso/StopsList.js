import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';


export default class StopsList extends React.Component {
  static navigationOptions={
    title: "StopsList",
  };
  constructor(props) {
      super(props);
      var {params} = this.props.navigation.state;
      this.state = {
          numBus: params.busNumber,
          dirBus: params.busDirection
      };
  }



    render() {
      const {navigate} = this.props.navigation;
      console.log("estou na lista de paragens");
      console.log("numero do autocarro");
      console.log(this.state.numBus);   //use me like this for bus number
      console.log("sentido do autocarro");
      console.log(this.state.dirBus);   //use me like this for bus direction





      return(
          <View style = {{flexDirection:'column', alignItems:'center',justifyContent:'center', position:'relative', top:'15%',padding:5}}>
            <TouchableOpacity onPress = {() => {navigate('DestStop', {})}} style = {styles.backButton}>
                 <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                   <Image style = {styles.backImage} source={require('./back.png')} />
                   <Text style = {styles.backText}>FRENTE</Text>
                 </View>
            </TouchableOpacity>
            <Text style = {styles.Text}>Escolha uma destas paragens</Text>
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
   button: {
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
     },
    image: {
        display: 'flex',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
       fontSize: 18,
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
  destText: {
     fontSize: 20,
     width:190,
     //textTransform: 'uppercase',
     color: '#ffffff',
     textAlign:'center',
 },
 direcao1: {
     display: 'flex',
     margin:30,
     height: 70,
     width:190,
     justifyContent: 'center',
     alignItems: 'center',
     top:27,

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
     shadowRadius: 20,
 },
 direcao2: {
     display: 'flex',
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
     shadowRadius: 20,
 },


  });
