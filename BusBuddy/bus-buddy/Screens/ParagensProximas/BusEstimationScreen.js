
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

import BusList from './../API_components/BusList';

export default class BusEstimationScreen extends React.Component {
  static navigationOptions={
    title: "BusesOnStop",
  };

  constructor(props) {
    super(props);
      //here we bind the function to this element so it can be properly used by child element
      this.updateSelected = this.updateSelected.bind(this);
      var {params} = this.props.navigation.state;
      this.state = {
          selected: null,
          stop: params.stopName,
          id: params.id,
      };
  }

  //this function is called by button child element to update parent state (and in this case navigate to next screen)
  updateSelected(chosen_stop){
    this.setState({
      selected: chosen_stop
    });

    //FIXME: this is where we can navigate to next screen (carrying over the info saved in the state)
    //hint: chosen_stop is an object. you can do things like chosen_stop.id, chosen_stop.name etc
    console.log("eeioehikejiojeo");
    console.log(chosen_stop);
  }


  //FIXME: here the coords are hard-coded... for now :P
  render() {
    console.log("fjjjjjjjjj");
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {styles.Text}>{this.state.stop}</Text>
        <BusList bus_stop_id={this.state.id} num_results='10' updateSelected = {this.updateSelected}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
     fontSize: 18,
     width:350,
     height:25,
     //textTransform: 'uppercase',
     color: 'grey',
     textAlign:'center',
     margin:30,
 },


});
