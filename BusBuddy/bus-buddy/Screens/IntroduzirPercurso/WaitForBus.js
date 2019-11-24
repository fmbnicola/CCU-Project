import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import BusList from './../API_components/BusList';

export default class WaitForBus extends React.Component {

    constructor(props) {
        super(props);
        var {params} = this.props.navigation.state;

        this.state = {
            loading: false,
            numBus: params.numBus,
            ini_stop: params.ini_stop,
            fin_stop: params.fin_stop,
            selected: null,
        };
    }

    render(){
        const {navigate} = this.props.navigation;

        if(this.state.loading){
            return(
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', top:'15%', padding:5}}>
                    
                    <TouchableOpacity onPress = {() => {navigate('ReadyToGo', {})}} style = {styles.backButton}>
                        <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                            <Image style = {styles.backImage} source={require('./back.png')} />
                            <Text style = {styles.backText}>BACK</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <ActivityIndicator size="large" color="#0c9"/>

                </View>
            )
        }
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', top:'15%', padding:5}}>
                
                <TouchableOpacity onPress = {() => {navigate('ReadyToGo', {})}} style = {styles.backButton}>
                    <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                        <Image style = {styles.backImage} source={require('./back.png')} />
                        <Text style = {styles.backText}>BACK</Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.Text}> Próximos Autocarros</Text>
                <Text style = {styles.TextSmall}> {this.state.ini_stop.id} - {this.state.ini_stop.name} </Text>
                <Text importantForAccessibility='no-hide-descendants'> {"\n\n"} </Text>
                <View pointerEvents="none" style = {styles.crop}>
                    <BusList bus_stop_id={this.state.ini_stop.id} route_id={this.state.numBus} num_results='3' updateSelected = {this.updateSelected}/>
                </View>


                <TouchableOpacity 
                    style={styles.letsgo} 
                    onPress = {() => {
                        navigate('WaitForBus', {
                            numBus: this.state.numBus,
                            ini_stop: this.state.ini_stop,
                            fin_stop: this.state.fin_stop
                        })
                    }}
                >

                    <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text style = {styles.destText}>Iniciar Viagem</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    crop:{
        top: 30,
        height: 200
    },
    Text: {
        fontSize: 18,
        width: '100%',
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        top: 45,
    },
    TextSmall: {
        fontSize: 16,
        width: '100%',
        //textTransform: 'uppercase',
        color: '#333',
        textAlign:'center',
        top: 45,
    },
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    backButton: {
        display: 'flex',
        alignSelf: 'flex-start',
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
    backText: {
        fontSize: 16,
        width:100,
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        position: 'relative',
        right: 3,
    },
    destText: {
        fontSize: 20,
        width:190,
        //textTransform: 'uppercase',
        color: '#ffffff',
        textAlign:'center',
    },
    letsgo: {
        display: 'flex',
        margin:30,
        height: 70,
        width:210,
        justifyContent: 'center',
        alignItems: 'center',
  
        borderRadius:20,
        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        borderLeftWidth: 0.5,
        borderLeftColor:'grey',
        borderRightWidth: 0.5,
        borderRightColor:'grey',
        backgroundColor: '#0066cc',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
});