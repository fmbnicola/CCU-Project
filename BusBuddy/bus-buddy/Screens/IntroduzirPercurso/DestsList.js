import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

import BusStopList from './../API_components/BusStopList';

export default class DestsList extends React.Component {

  static navigationOptions={
    title: "DestsList",
  };

  constructor(props) {
      super(props);
      var {params} = this.props.navigation.state;

      this.updateSelected = this.updateSelected.bind(this);

      this.state = {
          numBus:   params.numBus,
          ini_stop: params.ini_stop,
          fin_stop: params.fin_stop,
          selected: null
      };
  }


  updateSelected(chosen_stop){
    this.setState({
      selected: chosen_stop
    });

    const {navigate} = this.props.navigation;
    navigate('ReadyToGo', {numBus: this.state.numBus,
                           ini_stop: this.state.ini_stop,
                           fin_stop: chosen_stop});
  }


  render() {
    const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', position: 'relative', top:'15%'}}>

        <TouchableOpacity onPress = {() => {navigate('DestStop', {})}} style = {styles.backButton}>
          <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
            <Image style = {styles.backImage} source={require('./back.png')} />
            <Text
            accessibilityLabel = "Botão"
            accessibilityHint = "Voltar"
            style = {styles.backText}>VOLTAR</Text>
          </View>
        </TouchableOpacity>

        <View style={{width: '100%', height: '100%'}}>
          <BusStopList access = 'button' target = 'route' route_no = {this.state.numBus} initial_stop={this.state.ini_stop.id} final_stop={this.state.fin_stop} include={[0,1]} updateSelected = {this.updateSelected} style = {styles.stopList}/>
        </View>

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
       fontSize: 25,
       width:'80%',
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'center',
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
     fontSize: 20,
     //textTransform: 'uppercase',
     color: 'white',
     textAlign:'center',
 },
 direcao1: {
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

});
