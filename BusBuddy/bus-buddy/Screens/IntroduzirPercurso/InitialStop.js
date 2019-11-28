import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';


export default class InitialStop extends React.Component {

  static navigationOptions={
    title: "InitialStop",
  };

  constructor(props) {
    super(props);
    var {params} = this.props.navigation.state;

    this.state = {
        numBus: params.busNumber,
        ini_stop: params.ini_stop,
        fin_stop: params.fin_stop,
    };
}

  render() {
    const {navigate} = this.props.navigation;

    return(
        <View style = {{flexDirection:'column', alignItems:'center',justifyContent:'space-between', position:'relative', top:'15%'}}>

            <TouchableOpacity onPress = {() => {navigate('BusDir', {})}} style = {styles.backButton}>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                    <Image style = {styles.backImage} source={require('./back.png')} />
                    <Text
                    accessibilityLabel = "Botão"
                    accessibilityHint = "Voltar"
                    style = {styles.backText}>BACK</Text>
                </View>
            </TouchableOpacity>

           <TouchableOpacity
           accessibilityLabel = "Botão"
           accessibilityHint = "Escolher Paragem de Começo"
                style={styles.começo}
                onPress = {() => {
                    navigate('StopsList', {
                        busNumber: this.state.numBus,
                        fin_stop: this.state.fin_stop,
                        ini_stop: this.state.ini_stop,
                    });
                }}
            >
              <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text
                     style = {styles.destText}>Escolher Paragem de Começo</Text>
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
   SmallText: {
    fontSize: 16,
    width:300,
    //textTransform: 'uppercase',
    color: 'black',
    textAlign:'center',
    position: 'relative',
    top: 45,
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
    fontSize: 25,
    color:'white',
    textAlign:'center',
 },
 começo: {
    display: 'flex',
    height: '40%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#47525E',
    shadowColor: 'white',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
 },


  });
