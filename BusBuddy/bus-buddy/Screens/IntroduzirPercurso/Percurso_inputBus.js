import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';

export default class Percurso_inputBus extends React.Component {
  static navigationOptions={
    title: "InputBus",
  };
  constructor(props){
    super(props);
    this.state = { text: '' };
  }


    /*this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false},
        { id: 1, title: 'Cook dinner', done: false}
      ]
    }  }*/

//ACRESCENTAR MANDAR O STATE E VER COMO RECEBER PARAMETROS
    render() {
      const {navigate} = this.props.navigation;
      console.log(this.state);
      return(
        //<View style={styles.botoes}>
          /*<Button title="Paragens Próximas" accessibilityLabel="texto cegos" color="black" onPress={() => Alert.alert('1')}/>
          <Button title="Introduzir Percurso" onPress={() => Alert.alert('2')}/>
          <Button title="Planear Rota" onPress={() => Alert.alert('3')}/>
          <Button title="Minha Localização" onPress={() => Alert.alert('4')}/>*/
          <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
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
              value={this.state.text}/>
            <TouchableOpacity
              onPress = {() => {navigate('Home', {})}}  //falta por paramentos para passarem para o proximo ecra
              style = {styles.button}
              accessibilityHint = "Confirmar autocarro"
              >
                   <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                   <Image style={styles.image} source={require('./check-mark.png')} />
                   </View>
              </TouchableOpacity>
          </View>
        //</View>
      );
    }
  }

  const styles = StyleSheet.create({
   button: {
        display: 'flex',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative',
        top:200,
        left: 160,

      },
    backButton: {
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


  });
