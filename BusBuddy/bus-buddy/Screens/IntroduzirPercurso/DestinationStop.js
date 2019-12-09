import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';


export default class DestinationStop extends React.Component {

  static navigationOptions={
    title: "DestStop",
  };

  constructor(props) {
    super(props);
    var {params} = this.props.navigation.state;

    this.state = {
      numBus: params.numBus,
      ini_stop: params.ini_stop,
      fin_stop: params.fin_stop,
    };
  }

  render() {
    const {navigate} = this.props.navigation;

    return(
        <View style = {{flexDirection:'column', alignItems:'center',justifyContent:'space-between', position:'relative', top:'15%'}}>
          <Text style = {styles.accessibilityTitle} accessibilityLabel = 'Novo Ecrã. Confirmar paragem de origem e escolher paragem de destino'> </Text>
          <TouchableOpacity onPress = {() => {navigate('StopsList', {})}} style = {styles.backButton}>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style = {styles.backImage} source={require('./back.png')} />
                  <Text
                  accessibilityLabel = "Botão"
                  accessibilityHint = "Voltar"
                  style = {styles.backText}>VOLTAR</Text>
                </View>
          </TouchableOpacity>

          <Text style = {styles.Text}>Paragem de origem selecionada:</Text>
          <Text style = {styles.SmallText}>{this.state.ini_stop.name}</Text>

          <TouchableOpacity
            style={styles.destino}
            onPress = {() => {    navigate('DestsList', {numBus:   this.state.numBus,
                                                         ini_stop: this.state.ini_stop,
                                                         fin_stop: this.state.fin_stop});}}
          >
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text
                    accessibilityLabel = "Botão"
                    accessibilityHint = "Escolher Paragem de Destino"
                     style = {styles.destText}>Escolher Paragem de Destino</Text>
              </View>
          </TouchableOpacity>

        </View>
    );
  }
}

  const styles = StyleSheet.create({
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
    Text: {
       /* fontSize: 18,
       width:350,
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'center',
       position: 'relative',
       top: 45, */
      fontSize: 25,
      width:'80%',
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
      //position: 'relative',
      //top: '0%',
      //left: '8%',
   },
   SmallText: {
    /* fontSize: 16,
    width:300,
    //textTransform: 'uppercase',
    color: 'black',
    textAlign:'center',
    position: 'relative',
    top: 45,*/
    fontSize: 25,
    width:'85%',
    //textTransform: 'uppercase',
    color: 'grey',
    textAlign:'center',
    top: '5%',

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
    fontSize: 15,
    width:'80%',
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
     /* fontSize: 20,
     width:190,
     //textTransform: 'uppercase',
     color: '#ffffff',
     textAlign:'center',*/

     fontSize: 20,
     //width:'100%',
     //textTransform: 'uppercase',
     //color: '#5A6978',
     color:'white',
     textAlign:'center',
 },
 destino: {
    display: 'flex',
    //margin: '30%',
    height: '30%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: '35%',

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

  accessibilityTitle: {
    top: 0,
  }


  });
