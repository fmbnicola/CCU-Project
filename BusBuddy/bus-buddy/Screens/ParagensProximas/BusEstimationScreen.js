/* NOTE: currently this file isn't connected to any other screen, it serves for demonstrative purposes */

import React from 'react';
import { 
  View,
  Text} from 'react-native';

import BusList from './../API_components/BusList';

export default class BusEstimationScreen extends React.Component {

  constructor(props) {
    super(props);
      //here we bind the function to this element so it can be properly used by child element
      this.updateSelected = this.updateSelected.bind(this);
      this.state = {
          selected: null
      };
  }

  //this function is called by button child element to update parent state (and in this case navigate to next screen)
  updateSelected(chosen_stop){
    this.setState({
      selected: chosen_stop
    });

    //FIXME: this is where we can navigate to next screen (carrying over the info saved in the state)
    //hint: chosen_stop is an object. you can do things like chosen_stop.id, chosen_stop.name etc
    console.log(chosen_stop);
  }


  //FIXME: here the coords are hard-coded... for now :P
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BusList bus_stop_id='3913' num_results='5' updateSelected = {this.updateSelected}/>
      </View>
    );
  }
}
