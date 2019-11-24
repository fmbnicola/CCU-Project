import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

export default class Percurso_inputBus extends React.Component {

    static navigationOptions={
        title: "InputBus",
    };


    constructor(props){
        super(props);
        this.state = { 
            text: '' 
        };
    }


    validateNumber(){
        //if nothing was typed don't accept
        if(this.state.text.length != 0){
            const {navigate} = this.props.navigation;
            navigate('ConfirmBus', {busNumber: this.state.text});
        }
    }

    //ACRESCENTAR MANDAR O STATE E VER COMO RECEBER PARAMETROS
    render() {
      const {navigate} = this.props.navigation;
      //console.log(this.state);
      return(
        <View style = {{flexDirection:'column', justifyContent:'space-between', alignItems:'center', position:'relative', top:'15%'}}>
          <TouchableOpacity onPress = {() => {navigate('Home', {})}} style = {styles.backButton}>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style = {styles.backImage} source={require('./back.png')} />
                  <Text style = {styles.backText}>BACK</Text>
                </View>
          </TouchableOpacity>
          <Text style = {styles.Text}>Escolha o número do autocarro que pretende apanhar</Text>
          <TextInput style = {styles.keyBoard}
            placeholder="Número do autocarro"
            placeholderTextColor= "#e6e6e6"
            underlineColorAndroid='transparent'
            returnKeyType = 'done'
            accessibilityRole = "keyboardkey"
            accessibilityLiveRegion="assertive"
            accessibilityHint = "Para selecionar o número da carreira que pretende apanhar"
            accessibilityLabel = "Abrir teclado"
            keyboardType={'number-pad'}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            onSubmitEditing={() => {this.validateNumber()}}/>
          <TouchableOpacity
            onPress = {() => {this.validateNumber()}}
            style = {styles.button}
            accessibilityHint = "Confirmar autocarro"
            >
                  <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                  <Image style={styles.image} source={require('./check-mark.png')} />
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
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    Text: {
       fontSize: 28,
       width:'75%',
       //textTransform: 'uppercase',
       color: 'grey',
       textAlign:'center',
       //position: 'relative',
       //top: '0%',
       //left: '8%',
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
      width:'50%',
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
      position: 'relative',
      top: '5%',
      //left: '25%',
  },


  });
