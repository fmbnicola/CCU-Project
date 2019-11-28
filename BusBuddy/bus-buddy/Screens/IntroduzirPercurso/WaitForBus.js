import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import BusList from './../API_components/BusList';
import {getRouteBusStops_mod} from './../API_components/APIFunctions';

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
            dataSource: []
        };
    }

    //this will populate dataSource with all the bus stops in the selected route
    componentDidMount(){
        getRouteBusStops_mod(this, this.state.numBus, this.state.ini_stop, this.state.fin_stop, [1,1]);
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={{justifyContent: 'space-between', alignItems: 'center', top:'15%'}}>

                <TouchableOpacity onPress = {() => {navigate('ReadyToGo', {})}} style = {styles.backButton}>
                    <View style = {{flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                        <Image style = {styles.backImage} source={require('./back.png')} />
                        <Text
                        accessibilityLabel = "Botão"
                        accessibilityHint = "Voltar"
                        style = {styles.backText}>BACK</Text>
                    </View>
                </TouchableOpacity>

                <Text style = {styles.Text}> Próximos Autocarros</Text>
                <Text style = {styles.TextSmall}> {this.state.ini_stop.id} - {this.state.ini_stop.name} </Text>
                <Text importantForAccessibility='no-hide-descendants'> {"\n"} </Text>
                <View pointerEvents="none" style = {styles.crop}>
                    <BusList bus_stop_id={this.state.ini_stop.id} route_id={this.state.numBus} num_results='3' updateSelected = {this.updateSelected}/>
                </View>


                <TouchableOpacity
                    style={styles.letsgo}
                    onPress = {() => {
                        navigate('TravelRoute', {
                            allStops: this.state.dataSource,
                        })
                    }}
                >
                    <View style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                            <Text
                            accessibilityLabel = "Botão"
                            accessibilityHint = "Iniciar Viagem"
                            style = {styles.destText}>Iniciar Viagem</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    crop:{
        top: '5%',
        height: 200,
    },
    Text: {
        fontSize: 25,
        width:'80%',
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
    },
    TextSmall: {
        fontSize: 22,
        width:'85%',
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
        top: '5%',

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
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
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
    backText: {
        fontSize: 16,
        width:'50%',
        //textTransform: 'uppercase',
        color: 'grey',
        textAlign:'center',
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
        height: '15%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: '10%',

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
