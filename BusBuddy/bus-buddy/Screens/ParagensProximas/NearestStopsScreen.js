
import React from 'react';
import {
  View,
  Text} from 'react-native';

import BusStopList from './../API_components/BusStopList';

export default class NearestStopsScreen extends React.Component {

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
    const {navigate} = this.props.navigation;
    navigate('BusesOnStop', {stopName: chosen_stop.name, id:chosen_stop.publicId });



    //FIXME: this is where we can navigate to next screen (carrying over the info saved in the state)
    //hint: chosen_stop is an object. you can do things like chosen_stop.id, chosen_stop.name etc
    console.log("neares");
    console.log(chosen_stop);
  }


  //FIXME: here the coords are hard-coded... for now :P
  render() {
    console.log("this.updateSelected");
    console.log(this.updateSelected);
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <BusStopList  target = 'nearest' updateSelected = {this.updateSelected}/>
      </View>
    );
  }
}
