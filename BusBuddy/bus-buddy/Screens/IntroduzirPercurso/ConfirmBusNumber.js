import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, TextInput, ActivityIndicator} from 'react-native';

import {doesRouteExist} from '../API_components/APIFunctions';

export default class ConfirmBusNumber extends React.Component {
    
    
    static navigationOptions={
        title: "ConfirmBus",
    };


    constructor(props) {
        super(props);
        var {params} = this.props.navigation.state;
        this.state = {
            loading: true,
            numBus: params.busNumber,
            nameBus: "",
            failure: false
        };
    }

    componentWillMount(){
        doesRouteExist(this);
    }


    //ACRESCENTAR MANDAR O STATE E VER COMO RECEBER PARAMETROS
    render() {
      const {navigate} = this.props.navigation;
    
        if(this.state.loading){
            return <Text>hi</Text>;
        }
        if(this.state.failure){
            return(
                <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
                    <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style = {styles.backButton}>
                        <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                            <Image style = {styles.backImage} source={require('./back.png')} />
                            <Text style = {styles.backText}>BACK</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style = {styles.Text}> Esse autocarro não existe </Text>
                </View>
            );
        }
        return(
            <View style = {{flexDirection:'column', justifyContent:'space-between', position:'relative', top:'15%'}}>
                <TouchableOpacity onPress = {() => {navigate('InputBus', {})}} style = {styles.backButton}>
                    <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                    <Image style = {styles.backImage} source={require('./back.png')} />
                    <Text style = {styles.backText}>BACK</Text>
                    </View>
                </TouchableOpacity>
                <Text style = {styles.Text}>Escolheu o autocarro </Text>
                <Text style = {styles.TextSmall}>{this.state.numBus} - {this.state.nameBus}</Text>
                <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                    <TouchableOpacity
                    onPress = {() => {navigate('InputBus', {})}}  //falta por paramentos para passarem para o proximo ecra
                    style = {styles.button}
                    accessibilityHint = "Negar numero do autocarro"
                    >
                        <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                        <Image style={styles.image} source={require('./cancel.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress = {() => {navigate('BusDir', {busNumber:this.state.numBus})}}  //falta por paramentos para passarem para o proximo ecra
                    style = {styles.button}
                    accessibilityHint = "Confirmar numero selecionado"
                    >
                        <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                        <Image style={styles.image} source={require('./check-mark.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
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
        fontSize: 20,
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        /* position: 'relative',
        top: 45, */
        width: '80%',
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
