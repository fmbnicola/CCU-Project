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
                    <Text
                    accessibilityLabel = "Botão"
                    accessibilityHint = "Voltar"
                    style = {styles.backText}>VOLTAR</Text>

                </View>

            </TouchableOpacity>

            <Text  accessibilityLiveRegion="assertive" style = {styles.Text}>Escolha o número do autocarro que pretende apanhar</Text>

            <TextInput
                autoFocus={true}
                style = {styles.keyBoard}
                placeholder=""
                placeholderTextColor= "#AAA"
                underlineColorAndroid='transparent'
                returnKeyType = 'done'
                accessibilityRole = "keyboardkey"
                
                accessibilityLabel = "Teclado"
                accessibilityHint = "Para ativar, Duplo clique e fique a primir"
                
                keyboardType={'number-pad'}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={() => {this.validateNumber()}}/>

            <TouchableOpacity
                onPress = {() => {this.validateNumber()}}
                style = {styles.button}
                accessibilityLabel = "Butao"
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
      fontSize: 15,
      width:'50%',
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
  },
   keyBoard: {
      fontSize: 25,
      width:'70%',
      //textTransform: 'uppercase',
      color: 'grey',
      textAlign:'center',
      position: 'relative',
      top: '5%',
      //left: '25%',

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


  });
