
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

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
    const {navigate} = this.props.navigation;

    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <TouchableOpacity onPress = {() => {navigate('Home', {})}} style = {styles.backButton}>
              <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                <Image style = {styles.backImage} source={require('./back.png')} />
                <Text style = {styles.backText}>BACK</Text>
              </View>
        </TouchableOpacity>
        <BusStopList  target = 'nearest' updateSelected = {this.updateSelected}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: '30%',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        position: 'relative',
        top:'30%',

    },
    /*backButton: {
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
    },*/
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
        fontSize: 28,
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        /* position: 'relative',
        top: 45,*/
    },
    TextSmall: {
        fontSize: 25,
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        /* position: 'relative',
        top: 45, */
        width: '85%',
        alignSelf: 'center',
        borderRadius:20,
        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        borderLeftWidth: 0.5,
        borderLeftColor:'grey',
        borderRightWidth: 0.5,
        borderRightColor:'grey',
    },
    /*backText: {
        fontSize: 16,
        width:100,
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        position: 'relative',
        right: 3,
    },*/
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

    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
});
