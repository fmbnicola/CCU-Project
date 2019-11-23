import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

import BusStopList from './../API_components/BusStopList';

export default class StopsList extends React.Component {
  
  
  constructor(props) {
      super(props);
      var {params} = this.props.navigation.state;
      
      this.updateSelected = this.updateSelected.bind(this);

      this.state = {
          numBus: params.busNumber,
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
    navigate('DestStop', {numBus: this.state.numBus,
                          ini_stop: this.state.chosen_stop,
                          fin_stop: this.state.fin_stop});
  }


  render() {
    const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top:'15%', padding:5}}>

        <TouchableOpacity onPress = {() => {navigate('BusDir', {})}} style = {styles.backButton}>
          <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
            <Image style = {styles.backImage} source={require('./back.png')} />
            <Text style = {styles.backText}>BACK</Text>
          </View>
        </TouchableOpacity>

        <View style={{width: '100%', height: '100%'}}>
          <BusStopList target = 'route' route_no = {this.state.numBus} initial_stop={this.state.ini_stop} final_stop={this.state.fin_stop} include={[1,0]} updateSelected = {this.updateSelected} style = {styles.stopList}/>
        </View>

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

});
