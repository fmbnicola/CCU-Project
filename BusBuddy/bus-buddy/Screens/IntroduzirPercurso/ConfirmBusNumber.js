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
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        position: 'relative',
        top: 45,
    },
    TextSmall: {
        fontSize: 20,
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

    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
});
